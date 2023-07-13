const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const vtm_pedido_estados = sequelize.define('vtm_pedido_estados', {
    Accion: { type: DataTypes.STRING },    
    Emp_cCodigo: { type: DataTypes.STRING },
    Pan_cAnio: { type: DataTypes.STRING },
    Per_cPeriodo: { type: DataTypes.STRING },
    Pdm_cNummov: { type: DataTypes.STRING },
    Pdm_nItem: { type: DataTypes.INTEGER },
    Pdm_cEstado: { type: DataTypes.STRING },
    Pdm_dFechaCrea: { type: DataTypes.DATE },
    Pdm_dFechaModifica: { type: DataTypes.DATE },
    Pdm_cUserModifica: { type: DataTypes.STRING },
     
})

module.exports = vtm_pedido_estados;

