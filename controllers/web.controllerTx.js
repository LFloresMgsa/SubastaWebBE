/*-------------------------------------------------
Componente: Procedimientos Transaccionales
-------------------------------------------------*/


const bd = require("../database/StringConection");
const mysqlTx = require('mysql2/promise');

// Función para ejecutar una consulta en la conexión establecida
async function executeQuery(connection, query, params) {
    try {
        const [results] = await connection.execute(query, params);
        return results;
    } catch (error) {
        throw error;
    }
}

// Función para iniciar una transacción
async function startTransaction(connection) {
    try {
        await connection.beginTransaction();
    } catch (error) {
        throw error;
    }
}

// Función para hacer commit de la transacción
async function commitTransaction(connection) {
    try {
        await connection.commit();
    } catch (error) {
        throw error;
    }
}

// Función para hacer rollback de la transacción
async function rollbackTransaction(connection) {
    try {
        await connection.rollback();
    } catch (error) {
        throw error;
    }
}

// Función para ejecutar el procedimiento almacenado de cabecera
async function executeGrabaCabecera(connection, params) {
    const query = "CALL sp_vtm_pedido (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
    try {
        const [results] = await executeQuery(connection, query, [
            "INSERTAR", 
            params.Emp_cCodigo, 
            params.Pan_cAnio,
            params.Per_cPeriodo, params.Pdm_cNummov,
            params.Cli_cNombre, params.Cli_cApellido,
            params.Cli_cDocId, params.Pdm_cDireccion,
            params.Pdm_cDistrito, params.Pdm_cDepartamento,
            params.Cli_cTelefono, params.Cli_cCorreo,
            params.Pdm_cComentario, params.Pdm_dFecha, params.Pdm_cEstado,
            params.Pdm_cComentarioUser,
            params.Pdm_dFechaCrea,
            params.Pdm_dFechaModifica,
            params.Pdm_cUserModifica           
        ]);
        const cabeceraId = results[0].Pdm_cNummov;

        return cabeceraId;
    } catch (error) {
        throw error;
    }
}

// Función para ejecutar el procedimiento almacenado de detalle
async function executeGrabaDetalle(connection, cabeceraId, params) {

    const query = "CALL sp_vtd_pedido (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
    try {
        for (let i = 0; i < params.length; i++) {

            const paramsDet = params[i];

            await executeQuery(connection, query, [
                "INSERTAR", 
                paramsDet.Emp_cCodigo, 
                paramsDet.Pan_cAnio, 
                cabeceraId,
                i + 1, 
                paramsDet.quantity, 
                paramsDet.Cab_cCatalogo,
                paramsDet.Cab_cDescripcion, 
                paramsDet.Dvd_nImporte,
                paramsDet.Dvd_nImporte * paramsDet.quantity,  
                'A', '', null, null, 'WEB', null
            ]);
        }
    } catch (error) {
        throw error;

    }
}


async function GrabaPedido(paramsCab, paramsDet) {
    let connection;

    try {
        // Crear una conexión a la base de datos
        connection = await mysqlTx.createConnection(bd.dbStringConection());

        // Iniciar transacción
        await startTransaction(connection);

        console.log('ejecuta cabecera');

        // Ejecutar procedimiento de cabecera
        const cabeceraId = await executeGrabaCabecera(connection, paramsCab);



        // Ejecutar procedimiento de detalle
        try {
            await executeGrabaDetalle(connection, cabeceraId, paramsDet);

        } catch (error) {
            // Error en el detalle, realizar rollback
            await rollbackTransaction(connection);
            throw error;
        }

        // Hacer commit de la transacción
        await commitTransaction(connection);

        console.log('Transacción completada con éxito.');
    } catch (error) {
        console.error('Error en la transacción:', error);
    } finally {
        // Cerrar la conexión a la base de datos
        if (connection) {
            connection.end();
        }
    }
}

const getGrabarPedido = async (request, response) => {
    let paramsCab = request.body.cabecera;
    let paramsDet = request.body.detalle;

    try {
        await GrabaPedido(paramsCab, paramsDet);
        response.json({ message: 'OK' });

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};


// export functions
module.exports = {
    getGrabarPedido
};


