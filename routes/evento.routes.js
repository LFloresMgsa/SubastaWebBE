
const express = require("express");
const webController  = require("../controllers/web.controller.js");

const authorization  = require("../controllers/auth.js");

const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");

// servicios libres
router.post('/lgm_catalogo_bs/',webController.getCatalogo);
router.post('/vtm_evento/',webController.getEventosCab);
router.post('/vtd_evento/',webController.getEventosDet);
router.post('/vtd_evento_puja/',webController.getEventosDetPuja);
router.post('/lgd_catalogo_imagenes/',webController.getCatalogoImagenes);
router.post('/lgm_videoteca/',webController.getVideoteca);
router.post('/sgm_usuarios/',webController.getUsuario);
router.post('/lgm_imagenes/',webController.getImagenes);
router.post('/auth/',authorization.token);

// servicios con seguridad JWT
router.post('/lgm_catalogo_bs/auth/',checkAuth,webController.getCatalogo);
router.post('/vtm_evento/auth/',checkAuth,webController.getEventosCab);
router.post('/vtd_evento/auth/',checkAuth,webController.getEventosDet);
router.post('/vtd_evento_puja/auth/',checkAuth,webController.getEventosDetPuja);
router.post('/lgd_catalogo_imagenes/auth/',checkAuth,webController.getCatalogoImagenes);
router.post('/lgm_videoteca/auth/',checkAuth,webController.getVideoteca);

 
module.exports = router;