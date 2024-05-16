import { User } from '../models/user.js';
import LoginService from '../services/loginService.js';

export default {
    async authenticate(req) {
        const { username, password } = req.body;
        const user = new User(username, password);

        const userResult = await LoginService.findUser(user);

        console.log('[DEBUG] LOGIN CONTROLLER - DB Response ' + userResult);

        if (userResult) {
            console.log('[DEBUG] Response from User DB' + userResult);
            return true;
        }

        return false;
    }
};

