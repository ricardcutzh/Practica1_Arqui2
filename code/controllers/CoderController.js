/**
 * @author Ricardo Antonio Cutz Hernandez
 * Controlador para el ingreso de palabras
 */
const FraseModel = require('../models/frase');
const mongoose = require('mongoose');

 function coder_principal(req, res)
 {
     res.status(200).render('Coder');
 }

 function coder_save_string(req, res)
 {
    try
    {
        
        if(Object.keys(req.body).length == 2)
        {
            console.log(req.body);
            var frase = new FraseModel({
                _id: new mongoose.Types.ObjectId(),
                cadena: req.body.frase,
                tipo: req.body.tipo,
                time: new Date(Date.now()).toLocaleTimeString()
            });
            frase.save().then(result => {
                //console.log(result);
                res.status(200);
                res.render('Coder');
            })
            .catch(err => {
                console.log(err);
                res.status(500);
                res.render('erro500');
            });
            
        }
        else 
        {
            res.status(404);
            res.render('erro404');
        }
    }
    catch(exception)
    {
        console.log(exception);
        res.status(500);
        res.render('erro500');
    }
 }

 module.exports = 
 {
     coder_principal,
     coder_save_string
 }