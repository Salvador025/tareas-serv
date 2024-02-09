
// Importamos el módulo express
const express = require('express');
// Importamos el módulo dotenv
require('dotenv').config();
// Importamos el módulo de rutas
const rutas = require('./src/routes/index.routes');

// Creamos una instancia de express
const app = express();

//Con esto funciona el post
app.use(express.json());

// Agregamos el middleware para parsear el body
app.use(rutas);

// Agregamos el puerto en el que se va a ejecutar el servidor
let port = process.env.PORT || 3000;

// Iniciamos el servidor "npm run dev" o "npm start 
app.listen(port, () => {
    if(process.env.NODE_ENV == 'dev') {
        console.log('App is running in port ' + port)
    } else {
        console.log('App is running')
    }
});

