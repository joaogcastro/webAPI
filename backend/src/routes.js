const express = require('express');
const EmployeeController = require('./controllers/employeeController.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Testing!');
});

// Employee Routes
router.get('/employee', (req, res) => {
    const employees = EmployeeController.readAll();
    res.status(200).json(employees);
});

module.exports = router;
