const db = require("../SubastaWebBE/database/db.js");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// include body for parser parameters
app.use(bodyParser.json());

// create mysql connection
const connection =db.getConnection();

// check connection

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("conexion exitosa");
    }
});


// get all data api

app.get("/catalogos", function (request, response) {
    //query
    connection.query("select *  from  lgm_catalogo_bs", function (error, results, fields) {
        if (error) {
            throw error;
        } else {
            response.json(results);
        }
    });

});

// get data by id data api

app.get("/catalogo/:Emp_cCodigo/:Cab_cCatalogo", function (request, response) {


    var Emp_cCodigo = request.params.Emp_cCodigo;
    var Cab_cCatalogo = request.params.Cab_cCatalogo;

    //query
    connection.query("select *  from  lgm_catalogo_bs where Emp_cCodigo = ? and  Cab_cCatalogo= ? ", [Emp_cCodigo, Cab_cCatalogo], function (error, results, fields) {
        if (error) {
            throw error;
        } else {
            response.json(results);
        }
    });

});

// insert data by id data api

app.post("/catalogo", function (request, response) {


    var params = request.body;

    //query
    connection.query("insert into lgm_catalogo_bs SET ?", params, function (error, results, fields) {

        if (error) {
            throw error;
        } else {
            response.json({
                status: 1,
                message: "Se inserto la data correctamente",
                data: results
            });

        }
    });

});

// update data by id data api

app.put("/catalogo", function (request, response) {


    var params = request.body;
    var Cab_cDescripcion = params.Cab_cDescripcion;
    var Propietario = params.Propietario;
    var Padre = params.Padre;
    var Madre = params.Madre;
    var Info = params.Info;
    var Placa = params.Placa;
    var Emp_cCodigo = params.Emp_cCodigo;
    var Cab_cCatalogo = params.Cab_cCatalogo;

    //query
    connection.query("update lgm_catalogo_bs SET Cab_cDescripcion =?, Propietario=?, Padre=?, Madre=?, Info=?, Placa=? where Emp_cCodigo=? and Cab_cCatalogo=? ", [Cab_cDescripcion, Propietario, Padre, Madre, Info, Placa, Emp_cCodigo, Cab_cCatalogo], function (error, results, fields) {

        if (error) {
            throw error;
        } else {
            response.json({
                status: 1,
                message: "Se actualizo la data correctamente"
            });

        }
    });

});

// delete data by id data api

app.delete("/catalogo", function (request, response) {

    var Emp_cCodigo = request.body.Emp_cCodigo;
    var Cab_cCatalogo = request.body.Cab_cCatalogo;

    //query
    connection.query("delete from lgm_catalogo_bs where Emp_cCodigo = ? and  Cab_cCatalogo= ? ", [Emp_cCodigo, Cab_cCatalogo], function (error, results, fields) {

        if (error) {
            throw error;
        } else {
            response.json({
                status: 1,
                message: "Se elimino la data correctamente",
                data: results,
                insert_id: results.insertId
            });

        }

    });

});

// execute store procedue MySQL

app.get("/listar", function (request, response) {

    var params = request.body;
    var Accion = params.Accion;
    var Emp_cCodigo = params.Emp_cCodigo;
    var Cab_cCatalogo = params.Cab_cCatalogo;

    connection.query("CALL sp_lgm_catalogo_bs (?,?,?,?,?,?,?,?,?,?,?,?,?) ", [Accion,Emp_cCodigo,"","","","",Cab_cCatalogo,"","","","","",""], function (error, results, fields) {

        if (error) {
            throw error;
        } else {
            response.json(results);
        }
    });

});

// pagina inicial

app.get("/", function (require, response) {
    response.send("<h3>Pagina inicial de MYSQL</h3>");
});


app.listen(PORT, function () {
    console.log("server running port 5000");
});