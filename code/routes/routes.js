/**
 * @author Ricardo Antonio Cutz Hernandez
 * Servidor de Express para API
 */
var express = require('express'); //REQUIRIENDO EXPRESS
var router = express.Router(); // DEFINIENDO LAS RUTAS DE EXPRESS
const CoderController = require("../controllers/CoderController");

router.route('/API/status').get(function(req, res){
    res.status(200);
    res.send({
        "message":"API REST Working",
    });
});

router.route('/Coder').get(CoderController.coder_principal);

module.exports = router;