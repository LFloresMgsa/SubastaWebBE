
const connectionConfig = {
    host: '172.31.19.194',
    database: 'advisor',
    port:3306,
    user: 'evento',
    password: '1q2w3e4r5t.'
};


const dbStringConection = () => {
    return connectionConfig;
};

module.exports = {
    
    dbStringConection
}; 
