
const Router = require("express");
const catalogoController  = require("./../controllers/lgm_catalogo_bs_Controller.js");

const router = Router();

router.get('/',catalogoController.getCatalogos);


module.exports = {
    router
}; 
