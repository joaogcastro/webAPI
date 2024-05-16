import { User } from '../models/user.js';
import LoginService from '../services/loginService.js';


export const authenticate = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userToFind = new User(username, password);

        const userResult = await LoginService.findUser(userToFind);

        if (userResult[0].username === username && userResult[0].password === password) {
            console.log('[DEBUG] Response from User DB:  ' + userResult[0].username + '  ' + userResult[0].password);
            return res.status(200).json({ message: 'Login successful'});
        } else {
            console.log('[DEBUG] NULL QUERY RESPONSE');
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
