
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDch3MQ-T1GYWg_aP824AHbOqiketWKC6g",
  authDomain: "truly-c01bd.firebaseapp.com",
  databaseURL: "https://truly-c01bd-default-rtdb.firebaseio.com",
  projectId: "truly-c01bd",
  storageBucket: "truly-c01bd.appspot.com",
  messagingSenderId: "216353435734",
  appId: "1:216353435734:web:47ede8cf8d0e6948684bf7",
  measurementId: "G-CE6J4FEGJH"
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