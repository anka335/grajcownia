// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNVuI8mYfv0wkp5uVeIXiiaYCOIyrWOrs",
  authDomain: "grajcownia-356cc.firebaseapp.com",
  projectId: "grajcownia-356cc",
  storageBucket: "grajcownia-356cc.appspot.com",
  messagingSenderId: "135006371631",
  appId: "1:135006371631:web:352a33e3a6c375ee6e2bda"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };