/*import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';
import { Navigate } from 'react-router-dom';

export default function AuthState() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log("zalogowany");
        setLoggedIn(true);
      } else {
        // User is signed out
        console.log("nie jest zalogowany");
        setLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return loggedIn ? <Navigate to="/mainuserpage" /> : <Navigate to="/login" />;
}*/