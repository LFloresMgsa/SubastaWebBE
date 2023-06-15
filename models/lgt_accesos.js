const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const lgt_accesos = sequelize.define('lgt_accesos', {
    Accion: { type: DataTypes.STRING },
    Emp_cCodigo: { type: DataTypes.STRING },
    Lgt_nIndex: { type: DataTypes.INTEGER },
    Lgt_nTabID: { type: DataTypes.INTEGER },
    Lgt_nPortalID: { type: DataTypes.INTEGER },
    Lgt_cTabName: { type: DataTypes.STRING },
    Lgt_cTitle: { type: DataTypes.STRING },
    Lgt_cDescription: { type: DataTypes.STRING },
    Lgt_nParentId: { type: DataTypes.INTEGER },
    Lgt_nLevel: { type: DataTypes.INTEGER },
    Lgt_cAuthorizedRoles: { type: DataTypes.STRING },
    Lgt_cAuthorizedRolesAllString:{ type: DataTypes.STRING},
    Lgt_cAdministratorRoles: { type: DataTypes.STRING},
    Lgt_nTabOrder: { type: DataTypes.INTEGER },
    Lgt_nIsVisible: { type: DataTypes.INTEGER },
    Lgt_cComponentName: { type: DataTypes.STRING },
    Lgt_cRouteName: { type: DataTypes.STRING },
    Lgt_cIsDisabled: { type: DataTypes.TINYINT(1) },
    Lgt_cIsDeleted: { type: DataTypes.TINYINT(1) },
    Lgt_cWasUpdated: { type: DataTypes.TINYINT(1) }
    
})


module.exports = lgt_accesos; 
