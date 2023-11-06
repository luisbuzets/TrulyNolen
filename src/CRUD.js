import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, set , get, ref, child, push, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";


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

const db = getDatabase(app);
const dbref = ref(db);

const registroform = document.getElementById('registro')

  const nombre = registroform['nom'].value
  const apellido = registroform['ape'].value
  const telefono = registroform['cel'].value
  const correo = registroform['Correo'].value
  const direccion = registroform['Dire'].value
  const rtn = registroform['rtn'].value
  const descripcion = registroform['des'].value

function writeUserData(n,a,t,c,d,r,des) {

  push(ref(db, 'Clientes/' ), {
    Nombre: n,
    Apellido: a,
    Telefono: t,
    Correo: c,
    direccion: d,
    RTN: r,
    Descripcion: des
  });
}

registroform.addEventListener('submit', (e)=> {

  const nombre = registroform['nom'].value
  const apellido = registroform['ape'].value
  const telefono = registroform['cel'].value
  const correo = registroform['Correo'].value
  const direccion = registroform['Dire'].value
  const rtn = registroform['rtn'].value
  const descripcion = registroform['des'].value

  writeUserData(nombre,apellido,telefono,correo,direccion,rtn,descripcion)

})

/*const updtboton = document.querySelectorAll('updtboton')
updtboton.forEach(button => {

button.addEventListener('click', (e) => {

  console.log(e.target.dataset.id)


})

})*/

const tb = document.getElementById('Tabla')
const dbRef = ref(db, 'Clientes/');

onValue(dbRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    console.log(childData,childKey)
         
    tb.innerHTML += '<tr><th>'+ childKey +'</th><td>' + childData.Nombre + '</td> <td>' + childData.Apellido +'</td> <td>'+childData.Telefono+'</td> <td>'+childData.Correo+'</td> <td>'+childData.direccion+'</td> <td>'+childData.RTN+'</td> <td> <button class="button is-warning" id="updtboton">editar</button> <button class="button is-danger" id="delete">eliminar</button> </td> </tr>'

  });
}, {
  onlyOnce: true
});