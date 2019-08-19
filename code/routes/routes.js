/**
 * @author Ricardo Antonio Cutz Hernandez
 * Servidor de Express para API
 */
var express = require('express'); //REQUIRIENDO EXPRESS
var router = express.Router(); // DEFINIENDO LAS RUTAS DE EXPRESS
const CoderController = require("../controllers/CoderController");


////////////////////////////////////////////////////////////////////////
// WEB
////////////////////////////////////////////////////////////////////////

// permite guardar la frase que se esta enviando desde la pagina web
router.route('/WEB/save_string').post(CoderController.coder_save_string);

// permite devolver la pagina principal del coder
router.route('/Coder').get(CoderController.coder_principal);

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// ARDUINO API
////////////////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

router.route('/API/get_string').get(CoderController.get_last_frase);

router.route('/API/status').get(function (req, res) {
    res.status(200);
    res.send("API REST Working");
});

router.route('/API/empty').get(CoderController.empty_frases);

////////////////////////////////////////////////////////////////////////

module.exports = router;