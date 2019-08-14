/**
 * @author Ricardo Antonio Cutz Hernandez
 * Servidor de Express para API
 */
const express = require('express');
const morgan = require('morgan');
const app = express();
var routes = require('./routes/routes'); // REQUIRIENDO LAS RUTAS

app.set('view engine', 'ejs'); //MOTOR DE VISTAS DE EXPRESS
app.use('/static', express.static('public')); //DEFINIENDO EL FOLDER DONDE ESTARAN LOS TEMAS
app.use(morgan('dev'));
app.use('/', routes); //DEFINIENDO EL CONTROLADOR DE LAS RUTAS


app.listen(80, () => {
    console.log("WEB API ESCUCHANDO EN PUERTO 80");
});