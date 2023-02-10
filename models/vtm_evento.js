import db from "../database/db.js";

import { DataTypes } from "sequelize";

const vtm_evento = db.define('vtm_evento', {
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

export default vtm_evento