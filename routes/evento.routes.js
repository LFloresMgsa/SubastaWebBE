
const express = require("express");

// servicios sin transaccion
const webController  = require("../controllers/web.controller.js");

// servicios con transaccion
const webControllerTx  = require("../controllers/web.controllerTx.js");

// autorizacion con jwt
const authorization  = require("../controllers/auth.js");

// midleware de autorizacion con jwt
const checkAuth = require("../middleware/checkAuth.js");


const router = express.Router();

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

router.post('/vtm_pedido/',webController.getPedidoCab);
router.post('/vtd_pedido/',webController.getPedidoDet);

router.post('/time/',webController.getTime);

// servicios con seguridad JWT
router.post('/lgm_catalogo_bs/auth/',checkAuth,webController.getCatalogo);
router.post('/vtm_evento/auth/',checkAuth,webController.getEventosCab);
router.post('/vtd_evento/auth/',checkAuth,webController.getEventosDet);
router.post('/vtd_evento_puja/auth/',checkAuth,webController.getEventosDetPuja);
router.post('/lgd_catalogo_imagenes/auth/',checkAuth,webController.getCatalogoImagenes);
router.post('/lgm_videoteca/auth/',checkAuth,webController.getVideoteca);

router.post('/vtm_pedido/auth/',checkAuth,webController.getPedidoCab);
router.post('/vtd_pedido/auth/',checkAuth,webController.getPedidoDet);
 
// servicios transaccionales
router.post('/FinalizarCompra/',webControllerTx.getGrabarPedido);

module.exports = router;