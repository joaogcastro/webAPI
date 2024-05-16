import { database } from '../database/db.js';

export default {
    findUser: (User) => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM login WHERE username = ? AND password = ?', [User.username, User.password], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }
};
