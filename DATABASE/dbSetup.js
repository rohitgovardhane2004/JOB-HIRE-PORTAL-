const mysql = require('mysql');

function dbConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rohit6455',
        database: 'job_portal'
    })
    connection.connect();
        return connection;
}

module.exports = dbConnection;