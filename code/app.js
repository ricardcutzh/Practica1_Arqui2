/**
 * @author Ricardo Antonio Cutz Hernandez
 * Servidor de Express para API
 */
const express = require('express');
var bodyparser = require('body-parser'); //UTILIZANO EL BODY PARSER
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
var routes = require('./routes/routes'); // REQUIRIENDO LAS RUTAS
mongoose.connect('mongodb+srv://ricardcutzh:ricardcutzh@arqui2-practica1-3lelk.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true});

app.use(bodyparser()); //SETEANDO BODY PARSER
app.set('view engine', 'ejs'); //MOTOR DE VISTAS DE EXPRESS
app.use('/static', express.static('public')); //DEFINIENDO EL FOLDER DONDE ESTARAN LOS TEMAS
app.use(morgan('dev'));
app.use('/', routes); //DEFINIENDO EL CONTROLADOR DE LAS RUTAS



app.listen(80, () => {
    console.log("WEB API ESCUCHANDO EN PUERTO 80");
});