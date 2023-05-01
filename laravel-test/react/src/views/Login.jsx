import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { StyledLink } from "../NavStyle";
import { useState } from 'react';

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
    });

    function handleSubmit(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            setLoggedIn(true);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

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
                    <StyledLink to="/guestlayout/mainguestpage">graj jako gość</StyledLink>
                </p>
            </form>
        </div>
    )
}