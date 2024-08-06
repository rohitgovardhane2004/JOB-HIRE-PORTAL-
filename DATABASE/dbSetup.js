const mysql = require('mysql');

function dbConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'a1b2c3',
        database: 'super_30_job_portal'
    })
    connection.connect();
        return connection;
}

module.exports = dbConnection;