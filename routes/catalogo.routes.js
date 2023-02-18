
import { Router } from "express";
import { methods as catalogoController  } from "./../controllers/lgm_catalogo_bs_Controller.js";

const router = Router();

router.get('/',catalogoController.getCatalogos);

export default router;
