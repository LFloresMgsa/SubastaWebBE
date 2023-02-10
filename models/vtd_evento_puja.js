import db from "../database/db.js";

import { DataTypes } from "sequelize";

const vtd_evento_puja = db.define('vtd_evento_puja', {
    Emp_cCodigo: { type: DataTypes.STRING },
Pan_cAnio: { type: DataTypes.STRING },
Per_cPeriodo: { type: DataTypes.STRING },
Dvm_cNummov: { type: DataTypes.STRING },
Cab_cCatalogo: { type: DataTypes.STRING },
Dvd_nOrden : { type: DataTypes.INTEGER },
Dvd_nImporte : { type: DataTypes.DECIMAL },
Dvd_cEstado : { type: DataTypes.STRING }
})

export default vtd_evento_puja