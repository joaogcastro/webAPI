const express = require('express');
const router = express.Router();
const EmployeeController = require('./controllers/employeeController.js');
const ProductController = require('./controllers/productController.js');

router.get('/', (req, res) => {
    res.send('Testing!');
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
