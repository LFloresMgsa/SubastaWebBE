const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const lgm_videoteca = sequelize.define('lgm_videoteca', {
    Accion: { type: DataTypes.STRING },    
    Emp_cCodigo: { type: DataTypes.STRING },
    Lgt_nIndice: { type: DataTypes.INTEGER },
    Lgt_cURL: { type: DataTypes.STRING },
    Lgt_cTitulo: { type: DataTypes.STRING },
    Lgt_cComentario : { type: DataTypes.STRING },
    Lgt_cEstado: { type: DataTypes.STRING },
    Lgt_dFechaCrea:{type: DataTypes.DATE}
})

module.exports = lgm_videoteca;
