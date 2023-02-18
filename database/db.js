
const mysql =  require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'advisor',
    user: 'root',
    password: '1q2w3e4r5t.'
});

const getConnection = () => {
    return connection;
};

 module.exports = {
    getConnection
}; 
