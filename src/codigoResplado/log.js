

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {sendEmailVerification, getAuth, signInWithPopup, 
  createUserWithEmailAndPassword, signInWithEmailAndPassword,  
  onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';


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

const auth = getAuth(app);

login.addEventListener('click', (e) => {

    var email = document.getElementById('usernamelog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth,email, password).then(cred =>{
        alert ('Usuario logueado')
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;
    
        if(errorCode == 'auth/invalid-email')
              alert('El correo no es valido');
        else if(errorCode == 'auth/user-disable')
              alert('El usuario ha sido deshabilitado');
        else if(errorCode == 'auth/user-not-found')
              alert('El usuariono existe');    
        else if(errorCode == 'auth/wrong-password')
              alert('La contraseña incorrecta');   
    
    });
    
    
    

    
});
    
        // cerrar sesion
/*        
    cerrar.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('Sesion Cerrada');
    }).catch((error) => {
        alert('Error al Sesion Cerrada');
    });
});              
*/
auth.onAuthStateChanged(user => {
    if(user){
        console.log("Usuario Activo");
        var email = user.emailVerified;
        if(email){
            window.open("https://www.google.com/")
        }else{
            auth.signOut();
        }
    }else{
        console.log("Usuario Inactivo");
    }
});


