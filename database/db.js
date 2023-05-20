
const connectionConfig = require("../database/dbStringConection");
const mysql = require("mysql");

const connection = mysql.createConnection(connectionConfig);


const getConnection = () => {
    return connection;
};

const getCadena = () => {
    return connectionConfig;
};

module.exports = {
    getConnection,
    getCadena
}; 
