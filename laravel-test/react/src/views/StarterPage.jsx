import { StyledLink } from "../NavStyle"
import Logo from "../assets/Grajcownia-logo.png"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import axios from 'axios';
import { set } from 'lodash';
import { auth } from '../firebase.jsx';

const SignupLink = styled(StyledLink)`
  margin-left: 3px;
`;
const LoginLink = styled(StyledLink)`
  margin-left: 4px;
`;

export default function MainPage(){
      const [error, setError] = useState('');
      const navigate = useNavigate();
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
      const [nick, setNick] = useState('');
      const { anonymousSignIn } = UserAuth();

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
        <div id="SP">
            <header id="SP_header">
                <img src={Logo} height={100}/>
            </header>
            <section>
                <SignupLink to="/signup">zarejestruj się</SignupLink>
                <LoginLink to="/login">zaloguj się</LoginLink>
                <button onClick={onAnonymous} className="light-button">graj jako gość</button>
            </section>
        </div>
    )
}