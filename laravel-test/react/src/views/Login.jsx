import React, { useState } from 'react';
import 'firebaseui/dist/firebaseui.css';
import { StyledLink } from "../NavStyle";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { set } from 'lodash';
import { auth } from '../firebase.jsx';

export default function Login() {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();
      const { signIn } = UserAuth();
      const { anonymousSignIn } = UserAuth();
      const { user } = UserAuth();
      const [nick, setNick] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(email, password)
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
      };

      async function addUserToDatabase(user) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users', {
                name: nick,
                email: email,
                uid: user.uid
            }, 
            {
                headers: {
                    'Key': 'Accept',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Utworzono konto użytkownika w bazie danych:', response.data);
        } catch (error) {
            console.error('Błąd podczas dodawania użytkownika do bazy danych:', error);
        }
    }

      const onAnonymous = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await anonymousSignIn();
          setNick("Anon");
          setEmail("Brak");
          navigate('/guestlayout/mainguestpage')
          const anon = await firebase.auth().currentUser;
          addUserToDatabase(anon);
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
      }

    return(
        <div className="authentication">
            <form onSubmit={handleSubmit}>
                <h1 className="title">Zaloguj się</h1>
                <p><input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/></p>
                <p><input placeholder="hasło" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/></p>
                <p><button type="submit" className="btn btn-block">wyślij</button></p>
                <p className="message">
                    <StyledLink to="/signup">zarejestruj się</StyledLink>
                </p>
                <p className="message">
                  <button onClick={onAnonymous} className='light-button'>graj jako gość</button>
                </p>
            </form>
        </div>
        )
}