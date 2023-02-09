import db from "../database/db.js";

import { DataTypes } from "sequelize";

const lgm_catalogo_bs = db.define('lgm_catalogo_bs', {
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

export default lgm_catalogo_bs