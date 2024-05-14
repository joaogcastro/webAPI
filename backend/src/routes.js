const express = require('express');
const router = express.Router();
const EmployeeController = require('./controllers/employeeController.js');
const ProductController = require('./controllers/productController.js');


const users = [{
    id: 1,
    name: 'Vini P',
    email: 'viniciusprado7606@gmail.com',
    password: '123456'
}];

router.get('/', (req, res) => {
    res.send('Testing!');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return res.status(200).json({ message: 'Login successful', user });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});

// Employee Routes
router.get('/employee', (req, res) => {
    const employees = EmployeeController.readAll();
    res.status(200).json(employees);
});

// Product Routes
router.get('/product', (req, res) => {
    const products = ProductController.readAll();
    res.status(200).json(products);
});

module.exports = router;
