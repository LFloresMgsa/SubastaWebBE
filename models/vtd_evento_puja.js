const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const vtd_evento_puja = sequelize.define('vtd_evento_puja', {
    Accion: { type: DataTypes.STRING },    
    Emp_cCodigo: { type: DataTypes.STRING },
    Pan_cAnio: { type: DataTypes.STRING },
    Per_cPeriodo: { type: DataTypes.STRING },
    Dvm_cNummov: { type: DataTypes.STRING },
    Cab_cCatalogo : { type: DataTypes.STRING },
    Dvd_nCorrel: { type: DataTypes.INTEGER },
    Dvd_cDocID: {type: DataTypes.STRING},
    Dvd_cNombres  : {type: DataTypes.STRING},
    Dvd_cApellidos  : {type: DataTypes.STRING},
    Dvd_cTelefono  : {type: DataTypes.STRING},
    Dvd_cCorreo  : {type: DataTypes.STRING},
    Dvd_nImporte  : {type: DataTypes.DECIMAL},
    Dvd_cEstado  : {type: DataTypes.STRING},
    Dvd_dFechaPuja : {type: DataTypes.DATE},
    Dvd_cComentario: {type: DataTypes.STRING},
    Dvd_dFechaModificacion : {type: DataTypes.DATE}
  
   
})

module.exports = vtd_evento_puja;


