import { database } from '../database/db.js';

export default {
    async findUser(User) {
        await database.query('SELECT * FROM login WHERE username = ? AND password = ?', [User.username, User.password], (error, result) => {
            if (error) {
                return error;
            }
            if (result) {
                return result[0];
            } else {
                return null;
            }
        });
    }
};
