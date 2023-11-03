const express = require ('express');
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const bcrypt  = require('bcrypt');
require("dotenv").config();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const  port = process.env.PORT || 4000;

//const User = require('./src/models/user');




//rutas
//app.get('/',(req, res) => {
//    res.send("Welcome to my API") });


// coneccion mongodb
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error))


app.listen(port, () =>{
    console.log('server listening on port', port)
});


