/*-------------------------------------------------
Componente: Procedimientos No Transaccionales
-------------------------------------------------*/
const mysql = require("mysql");
const sc = require("../database/StringConection");


const db = require("../database/db.js");

const oEventoCab = require("../models/vtm_evento.js");
const oEventoDet = require("../models/vtd_evento.js");
const oEventoDetPuja = require("../models/vtd_evento_puja.js");
const oVideoteca = require("../models/lgm_videoteca.js");
const oCatalogoImagenes = require("../models/lgd_catalogo_imagenes.js");
const oCatalogo = require("../models/lgm_catalogo_bs.js");
const ouUsuario = require("../models/sgm_usuarios.js");
const oImagenes = require("../models/lgm_imagenes.js");

const oPedidoCab = require("../models/vtm_pedido.js");
const oPedidoDet = require("../models/vtd_pedido.js");

const oAcceso = require("../models/lgt_accesos.js")


// get all data api with store procedure
const getEventosCab = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

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
            oEventoCab.Vtt_cTipoEvento, oEventoCab.Dvm_cDescripcion, oEventoCab.Dvm_dInicio,
            oEventoCab.Dvm_dFin, oEventoCab.Dvm_cEstado], function (error, results, fields) {

                if (error) {

                    response.json({ error: error.message });

                } else {
                    response.json(results);
                }
            });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getEventosDet = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

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

        oEventoDet.Dvd_dInicio= params.Dvd_dInicio;
        oEventoDet.Dvd_dFin= params.Dvd_dFin;
        oEventoDet.Dvd_cComentario= params.Dvd_cComentario;
        oEventoDet.Dvd_dFechaCrea= params.Dvd_dFechaCrea;
        oEventoDet.Dvd_dFechaModifica= params.Dvd_dFechaModifica;
        oEventoDet.Dvd_cUserCrea= params.Dvd_cUserCrea;
        oEventoDet.Dvd_CUserModifica= params.Dvd_CUserModifica;

        connection.query("CALL sp_vtd_evento (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oEventoDet.Accion, oEventoDet.Emp_cCodigo, oEventoDet.Pan_cAnio, oEventoDet.Per_cPeriodo,
            oEventoDet.Dvm_cNummov, oEventoDet.Cab_cCatalogo, oEventoDet.Dvd_nOrden, oEventoDet.Dvd_nImporte, oEventoDet.Dvd_cEstado,
            oEventoDet.Dvd_dInicio, oEventoDet.Dvd_dFin, oEventoDet.Dvd_cComentario, oEventoDet.Dvd_dFechaCrea,, oEventoDet.Dvd_dFechaModifica, oEventoDet.Dvd_cUserCrea, oEventoDet.Dvd_CUserModifica ],
            function (error, results, fields) {

                if (error) {

                    response.json({ error: error.message });

                } else {
                    response.json(results);
                }
            });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getEventosDetPuja = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

        let outputParam1 = '';

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
        oEventoDetPuja.Dvd_cComentario = params.Dvd_cComentario;

        oEventoDetPuja.Dvd_dFechaModificacion = params.Dvd_dFechaModificacion;
        

        connection.query("CALL sp_vtd_evento_puja (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oEventoDetPuja.Accion, oEventoDetPuja.Emp_cCodigo, oEventoDetPuja.Pan_cAnio, oEventoDetPuja.Per_cPeriodo,
            oEventoDetPuja.Dvm_cNummov, oEventoDetPuja.Cab_cCatalogo, oEventoDetPuja.Dvd_nCorrel,
            oEventoDetPuja.Dvd_cDocID, oEventoDetPuja.Dvd_cNombres, oEventoDetPuja.Dvd_cApellidos, oEventoDetPuja.Dvd_cTelefono,
            oEventoDetPuja.Dvd_cCorreo, oEventoDetPuja.Dvd_nImporte, oEventoDetPuja.Dvd_cEstado, oEventoDetPuja.Dvd_dFechaPuja,
            oEventoDetPuja.Dvd_cComentario, oEventoDetPuja.Dvd_dFechaModificacion
        ], function (error, results, fields) {

            if (error) {

                response.json({ error: error.message });

            } else {

                response.json(results);
            }


        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getCatalogoImagenes = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

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

                response.json({ error: error.message });

            } else {
                response.json(results);
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getVideoteca = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

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

                response.json({ error: error.message });

            } else {
                response.json(results);
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getCatalogo = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

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

                response.json({ error: error.message });

            } else {
                response.json(results);
            }
        });
    } catch (error) {

        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getUsuario = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

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

                response.json({ error: error.message });

            } else {
                response.json(results);
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getImagenes = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

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
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getPedidoCab = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

        var params = request.body;
        oPedidoCab.Accion = params.Accion;
        oPedidoCab.Emp_cCodigo = params.Emp_cCodigo;
        oPedidoCab.Pan_cAnio = params.Pan_cAnio;
        oPedidoCab.Per_cPeriodo = params.Per_cPeriodo;
        oPedidoCab.Pdm_cNummov = params.Pdm_cNummov;

        oPedidoCab.Cli_cNombre = params.Cli_cNombre;
        oPedidoCab.Cli_cApellido = params.Cli_cApellido;
        oPedidoCab.Cli_cDocId = params.Cli_cDocId;
        oPedidoCab.Pdm_cDireccion = params.Pdm_cDireccion;
        oPedidoCab.Pdm_cDistrito = params.Pdm_cDistrito;
        oPedidoCab.Pdm_cDepartamento = params.Pdm_cDepartamento;
        oPedidoCab.Cli_cTelefono = params.Cli_cTelefono;
        oPedidoCab.Cli_cCorreo = params.Cli_cCorreo;
        oPedidoCab.Pdm_cComentario = params.Pdm_cComentario;
        oPedidoCab.Pdm_dFecha = params.Pdm_dFecha;

        oPedidoCab.Pdm_cEstado = params.Pdm_cEstado;

        oPedidoCab.Pdm_cComentarioUser= params.Pdm_cComentarioUser;
        oPedidoCab.Pdm_dFechaCrea= params.Pdm_dFechaCrea;
        oPedidoCab.Pdm_dFechaModifica= params.Pdm_dFechaModifica;
        oPedidoCab.Pdm_cUserModifica = params.Pdm_cUserModifica;

        connection.query("CALL sp_vtm_pedido (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oPedidoCab.Accion, oPedidoCab.Emp_cCodigo, oPedidoCab.Pan_cAnio, oPedidoCab.Per_cPeriodo, oPedidoCab.Dvm_cNummov,
            oPedidoCab.Cli_cNombre, oPedidoCab.Cli_cApellido, oPedidoCab.Cli_cDocId, oPedidoCab.Pdm_cDireccion, 
            oPedidoCab.Pdm_cDistrito,oPedidoCab.Pdm_cDepartamento, oPedidoCab.Cli_cTelefono, oPedidoCab.Cli_cCorreo, 
            oPedidoCab.Pdm_cComentario, oPedidoCab.Pdm_dFecha, oPedidoCab.Pdm_cEstado, oPedidoCab.Pdm_cComentarioUser,
            oPedidoCab.Pdm_dFechaCrea,  oPedidoCab.Pdm_dFechaModifica,  oPedidoCab.Pdm_cUserModifica
        ], function (error, results, fields) {

            if (error) {

                response.json({ error: error.message });

            } else {
                response.json(results);
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getPedidoDet = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

        var params = request.body;
        oPedidoDet.Accion = params.Accion;
        oPedidoDet.Emp_cCodigo = params.Emp_cCodigo;
        oPedidoDet.Pan_cAnio = params.Pan_cAnio;
        oPedidoDet.Pdm_cNummov = params.Pdm_cNummov;

        oPedidoDet.Pdd_nItem = params.Pdd_nItem;
        oPedidoDet.Pdd_nCantidad = params.Pdd_nCantidad;
        oPedidoDet.Cab_cCatalogo = params.Cab_cCatalogo;
        oPedidoDet.Pdd_cDescripcion = params.Pdd_cDescripcion;
        oPedidoDet.Pdd_nPrecioUnitario = params.Pdd_nPrecioUnitario;
        oPedidoDet.Pdd_nPrecioNeto = params.Pdd_nPrecioNeto;


        oPedidoDet.Pdd_cEstado = params.Pdd_cEstado;
        oPedidoDet.Pdd_cComentario  = params.Pdd_cComentario;
        oPedidoDet.Pdd_dFechaCrea = params.Pdd_dFechaCrea;
        oPedidoDet.Pdd_dFechaModifica = params.Pdd_dFechaModifica;
        oPedidoDet.Pdd_cUserCrea = params.Pdd_cUserCrea;
        oPedidoDet.Pdd_CUserModifica= params.Pdd_CUserModifica;



        connection.query("CALL sp_vtd_pedido (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oPedidoDet.Accion, oPedidoDet.Emp_cCodigo, oPedidoDet.Pan_cAnio, oPedidoDet.Pdm_cNummov,
            oPedidoDet.Pdd_nItem, oPedidoDet.Pdd_nCantidad, oPedidoDet.Cab_cCatalogo, oPedidoDet.Pdd_cDescripcion, oPedidoDet.Pdd_nPrecioUnitario,
            oPedidoDet.Pdd_nPrecioNeto, 

            oPedidoDet.Pdd_cEstado,oPedidoDet.Pdd_cComentario,oPedidoDet.Pdd_dFechaCrea ,
            oPedidoDet.Pdd_dFechaModifica,oPedidoDet.Pdd_cUserCrea, oPedidoDet.Pdd_CUserModifica
    

        ], function (error, results, fields) {

            if (error) {

                response.json({ error: error.message });

            } else {
                response.json(results);
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getTime = async (request, response) => {
    try {
        const currentTime = new Date().toLocaleTimeString();
        response.json({ time: currentTime });


    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

const getAccesos = async (request, response) => {
    let connection;
    try {
        // create mysql connection
        connection = await mysql.createConnection(sc.dbStringConection());

        var params = request.body;
        oAcceso.Accion = params.Accion;
        oAcceso.Emp_cCodigo = params.Emp_cCodigo;
        oAcceso.Lgt_nIndex = params.Lgt_nIndex;
        oAcceso.Lgt_nTabID = params.Lgt_nTabID;
        oAcceso.Lgt_nPortalID = params.Lgt_nPortalID;
        oAcceso.Lgt_cTabName = params.Lgt_cTabName;
        oAcceso.Lgt_cTitle = params.Lgt_cTitle;
        oAcceso.Lgt_cDescription = params.Lgt_cDescription;
        oAcceso.Lgt_nParentId = params.Lgt_nParentId;
        oAcceso.Lgt_nLevel = params.Lgt_nLevel;
        oAcceso.Lgt_cAuthorizedRoles = params.Lgt_cAuthorizedRoles;
        oAcceso.Lgt_cAuthorizedRolesAllString= params.Lgt_cAuthorizedRolesAllString;
        oAcceso.Lgt_cAdministratorRoles = params.Lgt_cAdministratorRoles;
        oAcceso.Lgt_nTabOrder = params.Lgt_nTabOrder;
        oAcceso.Lgt_nIsVisible = params.Lgt_nIsVisible;
        oAcceso.Lgt_cComponentName = params.Lgt_cComponentName;
        oAcceso.Lgt_cRouteName = params.Lgt_cRouteName
        oAcceso.Lgt_cIsDisabled= params.Lgt_cIsDisabled;
        oAcceso.Lgt_cIsDeleted = params.Lgt_cIsDeleted;
        oAcceso.Lgt_cWasUpdated = params.Lgt_cWasUpdated;


        connection.query("CALL sp_lgt_accesos (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oAcceso.Accion, 
            oAcceso.Emp_cCodigo,
            oAcceso.Lgt_nIndex,
            oAcceso.Lgt_nTabID,
            oAcceso.Lgt_nPortalID,
            oAcceso.Lgt_cTabName,
            oAcceso.Lgt_cTitle,
            oAcceso.Lgt_cDescription,
            oAcceso.Lgt_nParentId,
            oAcceso.Lgt_nLevel,
            oAcceso.Lgt_cAuthorizedRoles,
            oAcceso.Lgt_cAuthorizedRolesAllString,
            oAcceso.Lgt_cAdministratorRoles,
            oAcceso.Lgt_nTabOrder,
            oAcceso.Lgt_nIsVisible,
            oAcceso.Lgt_cComponentName,
            oAcceso.Lgt_cRouteName,
            oAcceso.Lgt_cIsDisabled,
            oAcceso.Lgt_cIsDeleted,
            oAcceso.Lgt_cWasUpdated

        ], function (error, results, fields) {

            if (error) {

                response.json({ error: error.message });

            } else {
                response.json(results);
            }
        });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
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
    getImagenes,
    getPedidoCab,
    getPedidoDet,
    getTime,
    getAccesos
};


