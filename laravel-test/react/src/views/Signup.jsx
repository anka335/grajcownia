import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRef, useState } from "react";
import { StyledLink } from "../NavStyle.js";
import passwordValidator from 'password-validator';
import { validate } from 'email-validator';
import { UserAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { set } from 'lodash';
import { auth } from '../firebase.jsx';
const schema_pw = new passwordValidator();

schema_pw
    .is().min(6)                                    // Minimum length 8
    .is().max(20)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().not().spaces()                           // Should not have spaces




export default function Signup(){

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
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
    function handleSubmit(event) {
        event.preventDefault();
      
        if (schema_pw.validate(password)) {
            if (validate(email)){
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    user.updateProfile({
                        displayName: nick
                    })
                    addUserToDatabase(user)
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
            } else {
                alert("email jest niepoprawny");
            }
        } else {
            alert("Hasło musi zawierać minimum 6 znaków, w tym małe i duże litery oraz nie może zawierać spacji");
        }
    };
    const onAnonymous = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await anonymousSignIn();
          setNick("Anon");
          setEmail("Brak");
          navigate('/guestlayout/mainguestpage')
          console.log('You are logged in anonymously')
          const anon = await firebase.auth().currentUser;
          addUserToDatabase(anon);
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
    }

    return(
        <div className="authentication">
            <form onSubmit={handleSubmit} name='registration_form'>
                <h1 className="title">Zarejestruj się</h1>
                <p><input placeholder="nazwa użytkownika" value={nick} onChange={(e) => setNick(e.target.value)}/></p>
                <p><input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/></p>
                <p><input placeholder="hasło" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
                <p><button className="btn btn-block" type="submit">Wyślij</button></p>
                <p className="message">
                    <StyledLink to="/login">zaloguj się</StyledLink>
                </p>
                <p className="message">
                    <button onClick={onAnonymous}>graj jako gość</button>
                </p>
            </form>
        </div>
    )
}