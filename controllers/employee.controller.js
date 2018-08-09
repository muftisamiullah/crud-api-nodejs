const Employee = require('../models/employee.model');


exports.test = function (req, res) {
    res.send('Greetings from the Test');
};

exports.employee_create = function (req, res) {
    let employee = new employee(
        {
            name: req.body.name,
            id: req.body.id
        }
    );

    employee.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Employee Created successfully')
    })
};
exports.employee_details = function (req, res) {
    employee.findById(req.params.id, function (err, employee) {
        if (err) return next(err);
        res.send(employee);
    })
};