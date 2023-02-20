
const express = require("express");
const catalogoController  = require("../controllers/catalogo.controller.js");

const router = express.Router();

router.post('/',catalogoController.getCatalogos);
router.post('/:Emp_cCodigo/:Cab_cCatalogo',catalogoController.getCatalogo);
router.post('/insertar/',catalogoController.postCatalogo);
router.delete('/',catalogoController.deleteCatalogo);
router.put('/',catalogoController.putCatalogo);
router.post('/sp/',catalogoController.getCatalogosSP);

 

module.exports = router;