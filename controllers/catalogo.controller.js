const db = require("../database/db.js");
const mysql = require("mysql");
const bodyParser = require("body-parser");

// get all data api
const getCatalogos = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        //query
        await connection.query("select *  from  lgm_catalogo_bs", function (error, results, fields) {
            response.json(results);
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// get data by id data api
const getCatalogo = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var Emp_cCodigo = request.params.Emp_cCodigo;
        var Cab_cCatalogo = request.params.Cab_cCatalogo;

        //query
        await connection.query("select *  from  lgm_catalogo_bs where Emp_cCodigo = ? and  Cab_cCatalogo= ? ", [Emp_cCodigo, Cab_cCatalogo], function (error, results, fields) {
            if (error) {
                throw error;
            } else {
                response.json(results);
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// insert data by id data api
const postCatalogo = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;

        //query
        await connection.query("insert into lgm_catalogo_bs SET ?", params, function (error, results, fields) {
    
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
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// get data by id data api
const deleteCatalogo = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var Emp_cCodigo = request.body.Emp_cCodigo;
        var Cab_cCatalogo = request.body.Cab_cCatalogo;
    
        //query
        await connection.query("delete from lgm_catalogo_bs where Emp_cCodigo = ? and  Cab_cCatalogo= ? ", [Emp_cCodigo, Cab_cCatalogo], function (error, results, fields) {
    
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
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// get data by id data api
const putCatalogo = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

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
        await connection.query("update lgm_catalogo_bs SET Cab_cDescripcion =?, Propietario=?, Padre=?, Madre=?, Info=?, Placa=? where Emp_cCodigo=? and Cab_cCatalogo=? ", [Cab_cDescripcion, Propietario, Padre, Madre, Info, Placa, Emp_cCodigo, Cab_cCatalogo], function (error, results, fields) {
    
            if (error) {
                throw error;
            } else {
                response.json({
                    status: 1,
                    message: "Se actualizo la data correctamente"
                });
    
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// get all data api with store procedure
const getCatalogosSP = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

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
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// export functions
module.exports = {
    getCatalogos,
    getCatalogo,
    postCatalogo,
    deleteCatalogo,
    putCatalogo,
    getCatalogosSP
};


