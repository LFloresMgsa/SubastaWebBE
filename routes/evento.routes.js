
const express = require("express");
const eventoController  = require("../controllers/evento.controller.js");



const router = express.Router();


router.post('/vtm_evento/',eventoController.getEventosCab);
router.post('/vtd_evento/',eventoController.getEventosDet);
router.post('/vtd_evento_puja/',eventoController.getEventosDetPuja);


router.post('/lgd_catalogo_imagenes/',eventoController.getCatalogoImagenes);




 

module.exports = router;