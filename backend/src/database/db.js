const config = require('../../config/databaseConfig.json');
const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name
});

databaseConnection.connect((error) => {
    if (error) {throw error;}
    console.log(`Connected to the Database ${config.db_name}`);
});

module.exports = databaseConnection;
