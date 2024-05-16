import config from '../../config/databaseConfig.json' assert { type: "json" };
import mysql from 'mysql';

const database = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name
});

database.connect((error) => {
    if (error) {throw error;}
    console.log(`Connected to the Database ${config.db_name}`);
});

export {
    database
};
