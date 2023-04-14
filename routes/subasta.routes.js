
const express = require("express");
const subastaController  = require("../controllers/subasta.controller.js");



const router = express.Router();


router.post('/sp/',subastaController.getSubastasSP);




 

module.exports = router;