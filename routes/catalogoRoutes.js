import express from "express";
import { getAllCatalogo } from "../controllers/lgm_catalogo_bs_Controller.js";

const router = express.Router()

router.get('/', getAllCatalogo)


export default router