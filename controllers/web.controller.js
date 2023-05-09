const db = require("../database/db.js");
const oEventoCab = require("../models/vtm_evento.js");
const oEventoDet = require("../models/vtd_evento.js");
const oEventoDetPuja = require("../models/vtd_evento_puja.js");
const oVideoteca = require("../models/lgm_videoteca.js");
const oCatalogoImagenes = require("../models/lgd_catalogo_imagenes.js");
const oCatalogo = require("../models/lgm_catalogo_bs.js");
const ouUsuario = require("../models/sgm_usuarios.js");
const oImagenes = require("../models/lgm_imagenes.js");


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
            oEventoCab.Accion, oEventoCab.Emp_cCodigo, oEventoCab.Pan_cAnio, oEventoCab.Per_cPeriodo, oEventoCab.Dvm_cNummov,
            oEventoCab.Vtt_cTipoEvento, oEventoCab.Dvm_cDescripcion, oEventoCab.Dvm_dInicio, oEventoCab.Dvm_dInicio,
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
            oEventoDet.Accion, oEventoDet.Emp_cCodigo, oEventoDet.Pan_cAnio, oEventoDet.Per_cPeriodo,
            oEventoDet.Dvm_cNummov, oEventoDet.Cab_cCatalogo, oEventoDet.Dvd_nOrden, oEventoDet.Dvd_nImporte, oEventoDet.Dvd_cEstado],
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
        oEventoDetPuja.Dvd_cApellidos = params.Dvd_cApellidos;

        oEventoDetPuja.Dvd_cTelefono = params.Dvd_cTelefono;
        oEventoDetPuja.Dvd_cCorreo = params.Dvd_cCorreo;
        oEventoDetPuja.Dvd_nImporte = params.Dvd_nImporte;
        oEventoDetPuja.Dvd_cEstado = params.Dvd_cEstado;

        oEventoDetPuja.Dvd_dFechaPuja = params.Dvd_dFechaPuja;


        connection.query("CALL sp_vtd_evento_puja (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oEventoDetPuja.Accion, oEventoDetPuja.Emp_cCodigo, oEventoDetPuja.Pan_cAnio, oEventoDetPuja.Per_cPeriodo,
            oEventoDetPuja.Dvm_cNummov, oEventoDetPuja.Cab_cCatalogo, oEventoDetPuja.Dvd_nCorrel,
            oEventoDetPuja.Dvd_cDocID, oEventoDetPuja.Dvd_cNombres, oEventoDetPuja.Dvd_cApellidos, oEventoDetPuja.Dvd_cTelefono,
            oEventoDetPuja.Dvd_cCorreo, oEventoDetPuja.Dvd_nImporte, oEventoDetPuja.Dvd_cEstado, oEventoDetPuja.Dvd_dFechaPuja
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
        oCatalogoImagenes.Cab_cEnlace = params.Cab_cEnlace;



        connection.query("CALL sp_lgd_catalogo_imagenes (?,?,?,?,?,?,?,?,?) ", [
            oCatalogoImagenes.Accion, oCatalogoImagenes.Emp_cCodigo, oCatalogoImagenes.Lgt_cCategoria,
            oCatalogoImagenes.Lgt_cGrupo, oCatalogoImagenes.Lgt_cClase, oCatalogoImagenes.Lgt_cFamilia,
            oCatalogoImagenes.Cab_cCatalogo, oCatalogoImagenes.Cab_nItem, oCatalogoImagenes.Cab_cEnlace
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

const getVideoteca = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oVideoteca.Accion = params.Accion;
        oVideoteca.Emp_cCodigo = params.Emp_cCodigo;
        oVideoteca.Lgt_nIndice = params.Lgt_nIndice;
        oVideoteca.Lgt_cURL = params.Lgt_cURL;
        oVideoteca.Lgt_cTitulo = params.Lgt_cTitulo;
        oVideoteca.Lgt_cComentario = params.Lgt_cComentario;
        oVideoteca.Lgt_cEstado = params.Lgt_cEstado;
        oVideoteca.Lgt_dFechaCrea = params.Lgt_dFechaCrea;

        connection.query("CALL sp_lgm_videoteca (?,?,?,?,?,?,?,?) ", [
            oVideoteca.Accion, oVideoteca.Emp_cCodigo, oVideoteca.Lgt_nIndice,
            oVideoteca.Lgt_cURL, oVideoteca.Lgt_cTitulo, oVideoteca.Lgt_cComentario,
            oVideoteca.Lgt_cEstado, oVideoteca.Lgt_dFechaCrea
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

const getCatalogo = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oCatalogo.Accion = params.Accion;
        oCatalogo.Emp_cCodigo = params.Emp_cCodigo;
        oCatalogo.Lgt_cCategoria = params.Lgt_cCategoria;
        oCatalogo.Lgt_cGrupo = params.Lgt_cGrupo;
        oCatalogo.Lgt_cClase = params.Lgt_cClase;

        oCatalogo.Lgt_cFamilia = params.Lgt_cFamilia;
        oCatalogo.Cab_cCatalogo = params.Cab_cCatalogo;
        oCatalogo.Cab_cDescripcion = params.Cab_cDescripcion;
        oCatalogo.Propietario = params.Propietario;

        oCatalogo.Padre = params.Padre;
        oCatalogo.Madre = params.Madre;
        oCatalogo.Info = params.Info;
        oCatalogo.Placa = params.Placa;



        connection.query("CALL sp_lgm_catalogo_bs (?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oCatalogo.Accion, oCatalogo.Emp_cCodigo, oCatalogo.Lgt_cCategoria,
            oCatalogo.Lgt_cGrupo, oCatalogo.Lgt_cClase, oCatalogo.Lgt_cFamilia,
            oCatalogo.Cab_cCatalogo, oCatalogo.Cab_cDescripcion, oCatalogo.Propietario,
            oCatalogo.Padre, oCatalogo.Madre, oCatalogo.Info,
            oCatalogo.Placa,
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

const getUsuario = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        ouUsuario.Accion = params.Accion;
        ouUsuario.Sgm_cUsuario = params.Sgm_cUsuario;
        ouUsuario.Sgm_cNombre = params.Sgm_cNombre;
        ouUsuario.Sgm_cContrasena = params.Sgm_cContrasena;
        ouUsuario.Sgm_cObservaciones = params.Sgm_cObservaciones;

        connection.query("CALL sp_sgm_usuarios (?,?,?,?,?) ", [
            ouUsuario.Accion, ouUsuario.Sgm_cUsuario, ouUsuario.Sgm_cNombre,
            ouUsuario.Sgm_cContrasena, ouUsuario.Sgm_cObservaciones
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

const getImagenes = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oImagenes.Accion = params.Accion;
        oImagenes.Emp_cCodigo = params.Emp_cCodigo;
        oImagenes.Lgt_nIndice = params.Lgt_nIndice;
        oImagenes.Lgt_cTitulo = params.Lgt_cTitulo;
        oImagenes.Lgt_cComentario = params.Lgt_cComentario;
        oImagenes.Lgt_cEstado = params.Lgt_cEstado;
        oImagenes.Lgt_dFechaCrea = params.Lgt_dFechaCrea;

        connection.query("CALL sp_lgm_imagenes (?,?,?,?,?,?,?) ", [
            oImagenes.Accion, oImagenes.Emp_cCodigo, oImagenes.Lgt_nIndice,
            oImagenes.Lgt_cTitulo, oImagenes.Lgt_cComentario,
            oImagenes.Lgt_cEstado, oImagenes.Lgt_dFechaCrea
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
    getCatalogoImagenes,
    getVideoteca,
    getCatalogo,
    getUsuario,
    getImagenes
};


