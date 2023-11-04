
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {sendEmailVerification, getAuth, signInWithPopup, 
  createUserWithEmailAndPassword, signInWithEmailAndPassword,  
  onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';


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

 register.addEventListener('click', (e) => {
      var email = document.getElementById('emailr').value;
      var password = document.getElementById('passwordr').value;

      createUserWithEmailAndPassword(auth, email, password).then(cred => {
          alert ("Usuario creado");
  
        sendEmailVerification(auth.currentUser).then(() => {
            alert ('se ha enviado un correo de verificacion');
            
        });

    
      }).catch(error => {
          const errorCode = error.code;


          if(errorCode == 'auth/email-alredy-in-use')
                alert('El correo ya esta en uso');
          else if(errorCode == 'auth/invalid-email')
                alert('El correo no es valido');
          else if(errorCode == 'auth/weak-password')
        
                  
      });


});


.catch((error) => {
  //    alert(error.message);
  //    console.log(error.code);
  //    
   //   console.log(error.message);
  })
