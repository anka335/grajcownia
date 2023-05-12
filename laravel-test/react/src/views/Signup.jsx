import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRef, useState } from "react";
import { StyledLink } from "../NavStyle.js";
import passwordValidator from 'password-validator';
import { validate } from 'email-validator';
import { UserAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

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
                    // ...
                    //console.log(event);
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
          await anonymousSignIn()
          navigate('/guestlayout/mainguestpage')
          //console.log('You are logged in anonymously')
        } catch (e) {
          setError(e.message)
          //console.log(e.message)
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