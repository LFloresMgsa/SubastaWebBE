const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const lgd_catalogo_imagenes  = sequelize.define('lgd_catalogo_imagenes', {
    Accion: { type: DataTypes.STRING },
    Emp_cCodigo: { type: DataTypes.STRING },
    Lgt_cCategoria: { type: DataTypes.STRING },
    Lgt_cGrupo: { type: DataTypes.STRING },
    Lgt_cClase: { type: DataTypes.STRING },
    Lgt_cFamilia: { type: DataTypes.STRING },
    Cab_cCatalogo: { type: DataTypes.STRING },
    Cab_nItem: { type: DataTypes.INTEGER},
    Cab_cEnlace: { type: DataTypes.STRING }
   
})


module.exports = lgd_catalogo_imagenes; 
