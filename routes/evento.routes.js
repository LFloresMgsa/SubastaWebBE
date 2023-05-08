
const express = require("express");
const webController  = require("../controllers/web.controller.js");

const authorization  = require("../controllers/auth.js");

const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");

// servicios libres
router.post('/vtm_evento/',webController.getEventosCab);
router.post('/vtd_evento/',webController.getEventosDet);
router.post('/vtd_evento_puja/',webController.getEventosDetPuja);
router.post('/lgd_catalogo_imagenes/',webController.getCatalogoImagenes);
router.post('/lgm_videoteca/',webController.getVideoteca);


router.post('/sgm_usuarios/',webController.getUsuario);

router.post('/auth/',authorization.token);

// servicios con seguridad JWT
router.post('/lgm_catalogo_bs/',checkAuth,webController.getCatalogo);

 
module.exports = router;