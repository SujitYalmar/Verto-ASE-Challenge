// /src/controllers/employeeController.js
const Employee = require('../models/employeeModel');

exports.createEmployee = (req, res) => {
  const { name, email, position } = req.body;
  if (!name || !email || !position) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  Employee.create({ name, email, position }, (err, employee) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json(employee);
  });
};

exports.getAllEmployees = (req, res) => {
  Employee.findAll((err, employees) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(employees);
  });
};

exports.getEmployeeById = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!employee) return res.status(404).json({ message: 'Employee not found.' });
    res.status(200).json(employee);
  });
};

exports.updateEmployee = (req, res) => {
  const { name, email, position } = req.body;
  if (!name || !email || !position) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  Employee.update(req.params.id, req.body, (err, employee) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(employee);
  });
};

exports.deleteEmployee = (req, res) => {
  Employee.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.changes === 0) return res.status(404).json({ message: 'Employee not found.' });
    res.status(204).send();
  });
};