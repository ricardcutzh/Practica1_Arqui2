/**
 * @author Ricardo Antonio Cutz Hernandez
 * Controlador para el ingreso de palabras
 */
const FraseModel = require('../models/frase');
const mongoose = require('mongoose');

 function coder_principal(req, res)
 {
     FraseModel.find().sort({_id: -1})
     .exec()
     .then(docs => {
        res.status(200).render('Coder', {'frases': docs});
     })
     .catch(err => {
        res.status(404).render('erro404');
     });
     
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
                time: new Date(Date.now()).toLocaleTimeString(),
                state: 'N'
            });
            frase.save().then(result => {
                //console.log(result);
                res.status(200);
                res.redirect('/Coder');
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

 function empty_frases(req, res)
 {
     FraseModel.deleteMany({})
     .exec()
     .then(d =>{
        res.status(202).send({"message":"Database is empty now!"});
     })
     .catch(err => {
        res.status(404).send({"message:":err});
     });
 }

 function get_last_frase(req, res)
 {
     try
     {
        FraseModel.find().sort({_id: -1}).limit(1)
        .exec()
        .then(docs => {
            if(docs.length == 1)
            {
                console.log(docs[0].state);
                if(docs[0].state == "N")
                {
                    status = 0;
                    if(docs[0].tipo == "Aprendizaje")
                    {
                        // 200 SI ES TIPO APRENDIZAJE
                        status = 200;
                    }
                    else
                    {   // 202 SI ES TIPO TRADUCCION
                        status = 202;
                    }
                    FraseModel.findOneAndUpdate({_id:docs[0].id},{$set:{state:"S"}})
                    .exec()
                    .then(docs2 => {
                        res.status(status).send(docs[0].cadena.toLowerCase());
                    })
                    .catch(err2 => {
                        res.status(500).send(err2);
                    });
                }
                else
                {
                    // SI NO HAY CONTENIDOO
                    res.status(204).send("Sin palabras nunevas...");
                }
            }
            else
            {
                res.status(404).send("error");
            }
            
        })
        .catch(err => {
            res.status(500).send("error");
        });
     }
     catch(exception)
     {

     }
 }
 module.exports = 
 {
     coder_principal,
     coder_save_string,
     empty_frases,
     get_last_frase
 }