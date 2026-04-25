// Este es el archivo main de la web

/*
 * A traves de const tenemos que crear una variable llamada express 
    Express es un framework de node que nos permite usar cosas que ya existen
 */

const express = require('express'); // Importa Express (Como cualquier import de Java)

// Todo lo que esté en express se usa app, para despues usar app.<function>
const app = express(); // Crea la aplicación servidor

// Puerto para abrir el backend
const PORT = 3000; // Que puerto va a escuchar

// Para que node se pueda ejecutar hay que tener unas funciones

//Esto es para que nuestra aplicacion sea capaz de leer url's
app.use(express.urlencoded({extended:true})); // Permite leer datos de formularios POST (el nombre y mensaje del form)

// Esta linea es para manejar todo desde este proyecto y configurarla para que sea estática
app.use(express.static('.')); // Sirve archivos estáticos (CSS, imagenes, etc.) directamente desde la carpeta raíz


// -- TODO ESTO SON RUTAS
// Para definir la pagina principal se usa
// Se usa Request y Response (Parametros de Solicitud y Respuesta)
// Se usa funciones de flecha "arrow functions"
app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html')
});
// .get es el metodo
// '/' es la ruta
// req es lo que llega
// res es lo que responde
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

/* El flujo completo:
    Usuario llena el form y hace clic en "Botón"
        ↓
    POST /resultado  (manda nombre + mensaje)
        ↓
    app.post('/resultado') lo captura
        ↓
    req.body = { nombre: "...", mensaje: "..." }
        ↓
    console.log en la terminal de tu PC
 */