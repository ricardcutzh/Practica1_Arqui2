/**
 * @author Ricardo Antonio Cutz Hernandez
 * Modelo para la frase
 */
const mongoose = require('mongoose');

//definiendo el modelo
const fraseSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    cadena: String,
    time: String,
    tipo: String,
    state: String
});

module.exports = mongoose.model('Frase', fraseSchema);