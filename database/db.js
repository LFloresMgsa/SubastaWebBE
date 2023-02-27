
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: '172.16.0.4',
    database: 'advisor',
    user: 'backend',
    password: '1q2w3e4r5t.'
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
}; 
