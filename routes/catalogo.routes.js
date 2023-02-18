
const express = require("express");
const catalogoController  = require("../controllers/catalogo.controller.js");

const router = express.Router();

router.get('/catalogo/',catalogoController.getCatalogos);
router.get('/catalogo/:Emp_cCodigo/:Cab_cCatalogo',catalogoController.getCatalogo);
router.post('/catalogo/',catalogoController.postCatalogo);
router.delete('/catalogo/',catalogoController.deleteCatalogo);
router.put('/catalogo/',catalogoController.putCatalogo);
router.get('/catalogo/listar/',catalogoController.getCatalogosSP);

 

module.exports = router;