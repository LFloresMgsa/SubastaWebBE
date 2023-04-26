const db = require("../database/db.js");
const oEventoCab = require("../models/vtm_evento.js");
const oEventoDet = require("../models/vtd_evento.js");
const oEventoDetPuja = require("../models/vtd_evento_puja.js");

const oCatalogoImagenes = require("../models/lgd_catalogo_imagenes.js");

// get all data api with store procedure
const getEventosCab = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oEventoCab.Accion = params.Accion;
        oEventoCab.Emp_cCodigo = params.Emp_cCodigo;
        oEventoCab.Pan_cAnio = params.Pan_cAnio;
        oEventoCab.Per_cPeriodo = params.Per_cPeriodo;
        oEventoCab.Dvm_cNummov = params.Dvm_cNummov;
        oEventoCab.Vtt_cTipoEvento = params.Vtt_cTipoEvento;

        oEventoCab.Dvm_cDescripcion = params.Dvm_cDescripcion;
        oEventoCab.Dvm_dInicio = params.Dvm_dInicio;
        oEventoCab.Dvm_dFin = params.Dvm_dFin;
        oEventoCab.Dvm_cEstado = params.Dvm_cEstado;

    
        connection.query("CALL sp_vtm_evento (?,?,?,?,?,?,?,?,?,?) ", [
            oEventoCab.Accion , oEventoCab.Emp_cCodigo, oEventoCab.Pan_cAnio, oEventoCab.Per_cPeriodo, oEventoCab.Dvm_cNummov, 
            oEventoCab.Vtt_cTipoEvento, oEventoCab.Dvm_cDescripcion , oEventoCab.Dvm_dInicio, oEventoCab.Dvm_dInicio , 
            oEventoCab.Dvm_dFin, oEventoCab.Dvm_cEstado], function (error, results, fields) {
    
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

const getEventosDet = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oEventoDet.Accion = params.Accion;
        oEventoDet.Emp_cCodigo = params.Emp_cCodigo;
        oEventoDet.Pan_cAnio = params.Pan_cAnio;
        oEventoDet.Per_cPeriodo = params.Per_cPeriodo;
        oEventoDet.Dvm_cNummov = params.Dvm_cNummov;
        oEventoDet.Cab_cCatalogo = params.Cab_cCatalogo;

        oEventoDet.Dvd_nOrden = params.Dvd_nOrden;
        oEventoDet.Dvd_nImporte = params.Dvd_nImporte;
        oEventoDet.Dvd_cEstado = params.Dvd_cEstado;

        
        connection.query("CALL sp_vtd_evento (?,?,?,?,?,?,?,?,?) ", [
            oEventoDet.Accion , oEventoDet.Emp_cCodigo, oEventoDet.Pan_cAnio, oEventoDet.Per_cPeriodo, 
            oEventoDet.Dvm_cNummov, oEventoDet.Cab_cCatalogo, oEventoDet.Dvd_nOrden , oEventoDet.Dvd_nImporte, oEventoDet.Dvd_cEstado], 
            function (error, results, fields) {
    
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

const getEventosDetPuja = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oEventoDetPuja.Accion = params.Accion;
        oEventoDetPuja.Emp_cCodigo = params.Emp_cCodigo;
        oEventoDetPuja.Pan_cAnio = params.Pan_cAnio;
        oEventoDetPuja.Per_cPeriodo = params.Per_cPeriodo;
        oEventoDetPuja.Dvm_cNummov = params.Dvm_cNummov;
        oEventoDetPuja.Cab_cCatalogo = params.Cab_cCatalogo;

        oEventoDetPuja.Dvd_nCorrel = params.Dvd_nCorrel;
        oEventoDetPuja.Dvd_cDocID = params.Dvd_cDocID;
        oEventoDetPuja.Dvd_cNombres = params.Dvd_cNombres;
        oEventoDetPuja.Dvd_cApellidos= params.Dvd_cApellidos;

        oEventoDetPuja.Dvd_cTelefono= params.Dvd_cTelefono;
        oEventoDetPuja.Dvd_cCorreo= params.Dvd_cCorreo;
        oEventoDetPuja.Dvd_nImporte= params.Dvd_nImporte;
        oEventoDetPuja.Dvd_cEstado= params.Dvd_cEstado;

        oEventoDetPuja.Dvd_dFechaPuja= params.Dvd_dFechaPuja;

                
        connection.query("CALL sp_vtd_evento_puja (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oEventoDetPuja.Accion , oEventoDetPuja.Emp_cCodigo, oEventoDetPuja.Pan_cAnio, oEventoDetPuja.Per_cPeriodo, 
            oEventoDetPuja.Dvm_cNummov, oEventoDetPuja.Cab_cCatalogo, oEventoDetPuja.Dvd_nCorrel , 
            oEventoDetPuja.Dvd_cDocID, oEventoDetPuja.Dvd_cNombres , oEventoDetPuja.Dvd_cApellidos, oEventoDetPuja.Dvd_cTelefono,
            oEventoDetPuja.Dvd_cCorreo ,oEventoDetPuja.Dvd_nImporte ,oEventoDetPuja.Dvd_cEstado ,oEventoDetPuja.Dvd_dFechaPuja
        ], function (error, results, fields) {
    
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

const getCatalogoImagenes = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oCatalogoImagenes.Accion = params.Accion;
        oCatalogoImagenes.Emp_cCodigo = params.Emp_cCodigo;
        oCatalogoImagenes.Lgt_cCategoria = params.Lgt_cCategoria;
        oCatalogoImagenes.Lgt_cGrupo = params.Lgt_cGrupo;
        oCatalogoImagenes.Lgt_cClase = params.Lgt_cClase;

        oCatalogoImagenes.Lgt_cFamilia = params.Lgt_cFamilia;
        oCatalogoImagenes.Cab_cCatalogo = params.Cab_cCatalogo;
        oCatalogoImagenes.Cab_nItem = params.Cab_nItem;
        oCatalogoImagenes.Cab_cEnlace= params.Cab_cEnlace;

         

        connection.query("CALL sp_lgd_catalogo_imagenes (?,?,?,?,?,?,?,?,?) ", [
            oCatalogoImagenes.Accion , oCatalogoImagenes.Emp_cCodigo, oCatalogoImagenes.Lgt_cCategoria, 
            oCatalogoImagenes.Lgt_cGrupo, oCatalogoImagenes.Lgt_cClase, oCatalogoImagenes.Lgt_cFamilia , 
            oCatalogoImagenes.Cab_cCatalogo, oCatalogoImagenes.Cab_nItem , oCatalogoImagenes.Cab_cEnlace
        ], function (error, results, fields) {
    
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
    getEventosCab,
    getEventosDet,
    getEventosDetPuja,
    getCatalogoImagenes
};


