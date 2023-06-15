const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const vtd_pedido = sequelize.define('vtd_pedido', {
    Accion: { type: DataTypes.STRING },
    Emp_cCodigo: { type: DataTypes.STRING },
    Pan_cAnio: { type: DataTypes.STRING },
    Pdm_cNummov: { type: DataTypes.STRING },
    Pdd_nItem: { type: DataTypes.INTEGER },
    Pdd_nCantidad: { type: DataTypes.DECIMAL },
    Cab_cCatalogo: { type: DataTypes.STRING },
    Pdd_cDescripcion: { type: DataTypes.STRING },
    Pdd_nPrecioUnitario: { type: DataTypes.DECIMAL },
    Pdd_nPrecioNeto: { type: DataTypes.DECIMAL },
    Pdd_cEstado: { type: DataTypes.STRING },
    Pdd_cComentario: { type: DataTypes.STRING },
    Pdd_dFechaCrea: { type: DataTypes.DATE },
    Pdd_dFechaModifica: { type: DataTypes.DATE },
    Pdd_cUserCrea: { type: DataTypes.STRING },
    Pdd_cUserModifica: { type: DataTypes.STRING }
})

module.exports = vtd_pedido;


