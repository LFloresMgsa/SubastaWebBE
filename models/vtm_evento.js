const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const vtm_evento = sequelize.define('vtm_evento', {
    Accion: { type: DataTypes.STRING },    
    Emp_cCodigo: { type: DataTypes.STRING },
    Pan_cAnio: { type: DataTypes.STRING },
    Per_cPeriodo: { type: DataTypes.STRING },
    Dvm_cNummov: { type: DataTypes.STRING },
    Vtt_cTipoEvento : { type: DataTypes.STRING },
    Dvm_cDescripcion: { type: DataTypes.STRING },
    Dvm_dInicio: {type: DataTypes.DATE},
    Dvm_dFin  : {type: DataTypes.DATE},
    Dvm_cEstado: { type: DataTypes.STRING }
})

module.exports = vtm_evento;


