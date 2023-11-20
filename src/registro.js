
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDUv_3yA7Z8a099kJsH8PstJK3Bs32LrAA",
  authDomain: "trulynolen-e51ef.firebaseapp.com",
  databaseURL: "https://trulynolen-e51ef-default-rtdb.firebaseio.com",
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
const db = getDatabase();

let Emailr = document.getElementById('emailr');
let Passwordr = document.getElementById('passwordr');
let FnameInp = document.getElementById('fnameInp');
let MainForm = document.getElementById('MainForm');


let Registrase = evt =>{
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, Emailr.value, Passwordr.value)
    .then((credentials)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario Registrado',
            showConfirmButton: false,
            timer: 1500
          })
        //console.log(credentials);
        set(ref(db, 'UsersAuthList/' + credentials.user.uid),{
            Username: FnameInp.value
        })

    }).catch(error => {
        const errorCode = error.code;
        if(errorCode == 'auth/email-alredy-in-use')
              alert('El correo ya esta en uso');
        else if(errorCode == 'auth/invalid-email')
              alert('El correo no es valido');
        else if(errorCode == 'auth/weak-password')
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'La contraseña debe tener al menos 6 caracteres',
            showConfirmButton: false,
            timer: 1500
          })       
    });
    
}
MainForm.addEventListener('submit', Registrase)