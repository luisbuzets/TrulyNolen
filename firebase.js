
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDUv_3yA7Z8a099kJsH8PstJK3Bs32LrAA",
    authDomain: "trulynolen-e51ef.firebaseapp.com",
    projectId: "trulynolen-e51ef",
    storageBucket: "trulynolen-e51ef.appspot.com",
    messagingSenderId: "470832903507",
    appId: "1:470832903507:web:9b88af8c8ca67e3e5b5da6",
    measurementId: "G-D5XVM2P02W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
