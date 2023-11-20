
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';

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
const dbref = ref(db);

let Emailr = document.getElementById('emaillog');
let Passwordr = document.getElementById('passwordlog');
let MainForm = document.getElementById('MainForm');


let InicioSesion = evt =>{
    evt.preventDefault();

    signInWithEmailAndPassword(auth, Emailr.value, Passwordr.value)
    .then((credentials)=>{
       // console.log(credentials);
       get(child(dbref, 'UsersAuthList/' + credentials.user.uid)).then((snapshot)=>{
        if(snapshot.exists){
            sessionStorage.setItem("user-info",JSON.stringify({
              Username: snapshot.val().Username
            }))
            sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
            
            window.location.href ='/public/PaginaPrincipal.html';

        }
       })
    })
    .catch((error) => {
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })

}
MainForm.addEventListener('submit', InicioSesion)