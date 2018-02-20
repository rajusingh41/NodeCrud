
var express = require('express');
var router = express.Router();

var employee = require('../controllers/EmployeeController');


// Get All Employee

router.get('/', employee.list);

// Get Single Employee By id

router.get('/show/:id', employee.show);


// Create employee
router.get('/create', employee.create);

// Save Employee

router.post('/save', employee.save);

// Edit employee 

router.get('/edit/:id', employee.edit);

// Edit Update

router.post('/update/:id', employee.update);

// Delete Employee

router.post('/delete/:id', employee.delete);


module.exports = router;