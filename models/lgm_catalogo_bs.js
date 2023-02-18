const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const lgm_catalogo_bs = sequelize.define('lgm_catalogo_bs', {
    Accion: { type: DataTypes.STRING },
    Emp_cCodigo: { type: DataTypes.STRING },
    Lgt_cCategoria: { type: DataTypes.STRING },
    Lgt_cGrupo: { type: DataTypes.STRING },
    Lgt_cClase: { type: DataTypes.STRING },
    Lgt_cFamilia: { type: DataTypes.STRING },
    Cab_cCatalogo: { type: DataTypes.STRING },
    Cab_cDescripcion: { type: DataTypes.STRING },
    Propietario: { type: DataTypes.STRING },
    Padre: { type: DataTypes.STRING },
    Madre: { type: DataTypes.STRING },
    Info: { type: DataTypes.STRING },
    Placa: { type: DataTypes.STRING }
})


module.exports = lgm_catalogo_bs; 
