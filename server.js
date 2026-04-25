// Este es el archivo main de la web

/*
 * A traves de const tenemos que crear una variable llamada express 
    Express es un framework de node que nos permite usar cosas que ya existen
 */

const express = require('express');

// Todo lo que esté en express se usa app, para despues usar app.<function>
const app = express();

// Puerto para abrir el backend
const PORT = 3000;

// Para que node se pueda ejecutar hay que tener unas funciones

//Esto es para que nuestra aplicacion sea capaz de leer url's
app.use(express.urlencoded({extended:true}));

// Esta linea es para manejar todo desde este proyecto y configurarla para que sea estática
app.use(express.static('.'));

// Para definir la pagina principal se usa
// Se usa Request y Response (Parametros de Solicitud y Respuesta)
// Se usa funciones de flecha "arrow functions"
app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html')
});

app.get('/contacto', (req,res) => {
    res.sendFile(__dirname+'/contacto.html')
});

// 
app.listen(PORT,()=>{
    console.log('No nada')
});

app.post('/resultado', (req,res) =>{
    const {nombre,mensaje} = req.body;

    console.log('Datos Recibidos')
    console.log('Nombre: ', nombre)
    console.log('Mensaje: ', mensaje)
});