
const express = require("express");
const catalogoController  = require("../controllers/catalogo.controller.js");

const router = express.Router();

router.get('/',catalogoController.getCatalogos);
router.get('/:Emp_cCodigo/:Cab_cCatalogo',catalogoController.getCatalogo);
router.post('/',catalogoController.postCatalogo);
router.delete('/',catalogoController.deleteCatalogo);
router.put('/',catalogoController.putCatalogo);
router.get('/listar/',catalogoController.getCatalogosSP);

 

module.exports = router;