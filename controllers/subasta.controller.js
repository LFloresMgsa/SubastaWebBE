const db = require("../database/db.js");
const oSubasta = require("../models/vtm_evento.js");

// get all data api with store procedure
const getSubastasSP = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oSubasta.Accion = params.Accion;
        oSubasta.Emp_cCodigo = params.Emp_cCodigo;
        oSubasta.Pan_cAnio = params.Pan_cAnio;
        oSubasta.Per_cPeriodo = params.Per_cPeriodo;
        oSubasta.Dvm_cNummov = params.Dvm_cNummov;
        oSubasta.Vtt_cTipoEvento = params.Vtt_cTipoEvento;

        oSubasta.Dvm_cDescripcion = params.Dvm_cDescripcion;
        oSubasta.Dvm_dInicio = params.Dvm_dInicio;
        oSubasta.Dvm_dFin = params.Dvm_dFin;
        oSubasta.Dvm_cEstado = params.Dvm_cEstado;

    
        connection.query("CALL sp_evento_subasta (?,?,?,?,?,?,?,?,?,?) ", [oSubasta.Accion , oSubasta.Emp_cCodigo, oSubasta.Pan_cAnio, oSubasta.Per_cPeriodo, oSubasta.Dvm_cNummov, oSubasta.Vtt_cTipoEvento, oSubasta.Dvm_cDescripcion , oSubasta.Dvm_dInicio, oSubasta.Dvm_dInicio , oSubasta.Dvm_dFin, oSubasta.Dvm_cEstado], function (error, results, fields) {
    
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
    getSubastasSP
};


