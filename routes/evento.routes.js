
const express = require("express");
const subastaController  = require("../controllers/evento.controller.js");



const router = express.Router();


router.post('/vtm_evento/',subastaController.getEventosCab);
router.post('/vtd_evento/',subastaController.getEventosDet);
router.post('/vtd_evento_puja/',subastaController.getEventosDetPuja);




 

module.exports = router;