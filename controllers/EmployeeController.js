var mongoose = require('mongoose');

var Employee = mongoose.model('Employee');
var employeeController = {};

// Add show List of employee function
employeeController.list = function (req, res) {
    Employee.find({}).exec(function (err, employees) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            res.render('../views/employees/index', { employees: employees });
        }
    })
};

//  Show single employee by id

employeeController.show = function (req, res) {
    Employee.findOne({ _id: req.params.id }).exec(function (err, employee) {
        if (err) {
            compile.log('Error : ', err);
        }
        else {
            res.render('../views/employees/show', { employee: employee });
        }
    })
};

// Create employee
employeeController.create = function (req, res) {
    res.render('../views/employees/create');
};

//  save new employee 

employeeController.save = function (req, res) {
    var employee = new Employee(req.body);
    employee.save(function (err) {
        if (err) {
            console.log('Error : ', err);
            res.render('../views/employees/create');
        }
        else {
            console.log('employee created successfully');
            res.redirect('/employees/show/' + employee._id);
        }
    })
};

// edit employee
employeeController.edit = function (req, res) {
    Employee.findOne({ _id: req.params.id }).exec(function (err, employee) {
        if (err) {
            console.log('Error : ', err);
        }
        else {
            res.render('../views/employees/edit', { employee: employee });
        }
    })

};


// Update employee

employeeController.update = function (req, res) {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name, address: req.body.address,
            department: req.body.department, salary: req.body.salary
        }
    }, { new: true }, function (err, employee) {
        if (err) {
            console.log('Error : ', err);
            res.render('../views/employees/edit', { employee: req.body });
        }
        res.render('/employees/show/' + employee._id);
    })
};

// delete employee

employeeController.delete =function(req,res)
{
 Employee.remove({_id:req.params.id},function(err){
     if(err)
     {
         console.log('Error : ',err);
     }
     else{
         console.log('Employee deleted !');
         res.redirect('/employees');
     }
 })

};
model.exports = employeeController;