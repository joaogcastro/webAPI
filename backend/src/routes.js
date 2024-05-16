import express from 'express';
const routes = express.Router();
//import { EmployeeController } from './controllers/employeeController.js';
//import { ProductController } from './controllers/productController.js';
import {authenticate} from './controllers/loginController.js';


routes.get('/', (req, res) => {
    res.send('Testing!');
});

routes.post('/login', authenticate);

export {
    routes
};
