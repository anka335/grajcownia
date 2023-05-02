import React, { useState } from 'react';
import 'firebaseui/dist/firebaseui.css';
import { StyledLink } from "../NavStyle";
import UserLayout from "../components/UserLayout";
import MainUserPage from "../views/MainUserPage.jsx"
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

export default function Login() {
    /*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    AuthState();

    function handleSubmit(event) {
      event.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          setLoggedIn(true);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }*/

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();
      const { signIn } = UserAuth();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(email, password)
          navigate('/mainuserpage')
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
      };

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
                    <StyledLink to="/guestlayout/mainguestpage">graj jako gość</StyledLink>
                </p>
            </form>
        </div>
        )
}