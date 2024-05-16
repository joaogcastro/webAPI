import express from 'express';
const routes = express.Router();
//import { EmployeeController } from './controllers/employeeController.js';
//import { ProductController } from './controllers/productController.js';
import LoginController from './controllers/loginController.js';


routes.get('/', (req, res) => {
    res.send('Testing!');
});

routes.post('/login', (req, res) => {
    const resp = LoginController.authenticate(req);
    if (resp === true) {
        return res.status(200).json({ message: 'Login successful', resp });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});

export {
    routes
};
