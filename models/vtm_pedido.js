const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const vtm_pedido = sequelize.define('vtm_pedido', {
    Accion: { type: DataTypes.STRING },    
    Emp_cCodigo: { type: DataTypes.STRING },
    Pan_cAnio: { type: DataTypes.STRING },
    Pdm_cNummov: { type: DataTypes.STRING },
    Per_cPeriodo: { type: DataTypes.STRING },
    Cli_cNombre : { type: DataTypes.STRING },
    Cli_cApellido: { type: DataTypes.STRING },
    Cli_cDocId: {type: DataTypes.STRING},
    Pdm_cDireccion  : {type: DataTypes.STRING},
    Pdm_cDistrito  : {type: DataTypes.STRING},
    Pdm_cDepartamento  : {type: DataTypes.STRING},
    Cli_cTelefono  : {type: DataTypes.STRING},
    Cli_cCorreo  : {type: DataTypes.STRING},
    Pdm_cComentario  : {type: DataTypes.STRING},
    Pdm_dFecha: { type: DataTypes.DATE }
})

module.exports = vtm_pedido;


