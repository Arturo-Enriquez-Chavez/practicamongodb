const express = require('express');
require('dotenv').config();

const {dbConection}=require('./config/database');
const cors=require('cors');

//creando servidor express
const app = express();

//Configurar cors
app.use(cors()); 

//conexion a la BD
dbConection();
console.log(process.env);

//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto:'+ process.env.PORT);
})