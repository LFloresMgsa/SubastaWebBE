
const express = require("express");
const webController  = require("../controllers/web.controller.js");



const router = express.Router();


router.post('/vtm_evento/',webController.getEventosCab);
router.post('/vtd_evento/',webController.getEventosDet);
router.post('/vtd_evento_puja/',webController.getEventosDetPuja);
router.post('/lgd_catalogo_imagenes/',webController.getCatalogoImagenes);
router.post('/lgm_videoteca/',webController.getVideoteca);
router.post('/lgm_catalogo_bs/',webController.getCatalogo);
router.post('/sgm_usuarios/',webController.getUsuario);

 
module.exports = router;