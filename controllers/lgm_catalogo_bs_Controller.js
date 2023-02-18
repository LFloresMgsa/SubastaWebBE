import getConnection from "./../database/db.js";
import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";


//import lgm_catalogo_bs_Controller from "../models/lgm_catalogo_bs.js";
//import db from "../database/db.js";


const getCatalogos = async (request, response) => {
  try {

//    const app = express();

  //  const PORT = 8000;

    // include body parser for body parameters
    //app.use(bodyParser.json());

    // load mysql package
    //const mysql = require("mysql");
    console.log("prueba de conexion");
    // create mysql connection
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1q2w3e4r5t.",
      database: "advisor"
    });



    // check connection
    connection.connect(function (error) {

      if (error) {
        throw error;
      } else {
        console.log("We are now successfully connected with mysql database");
      }
    });



    // query
    connection.query("SELECT * from lgm_catalogo_bs", function (error, results, fields) {

      if (error) {
        throw error;
      } else {
        response.json(results);
        //console.log(fields);
      }
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};

export const methods = {
  getCatalogos
};
