import lgm_catalogo_bs_Controller from "../models/lgm_catalogo_bs.js";
import db from "../database/db.js";




export const getAllCatalogo = async (req, res) => {
  try {


    const express = require("express");
    const app = express();
    const bodyParser = require("body-parser");
    const mysql = require("mysql");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Crea una conexión a la base de datos MySQL
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1q2w3e4r5t.",
      database: "advisor"
    });

    con.connect(err => {
      if (err) throw err;
      console.log("Connected to the database");
    });

    //const catalogos = await lgm_catalogo_bs_Controller.findAll()
    //res.json(catalogos)

    let sql = "SELECT * FROM lgm_catalogo_bs";
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Data fetched");
      res.json(result);
    });

  } catch (error) {
    res.json({ message: error.message })
  }
}
