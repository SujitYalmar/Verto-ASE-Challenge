// /src/models/employeeModel.js
const db = require('../config/database');

const Employee = {
  create: (data, callback) => {
    const { name, email, position } = data;
    const sql = 'INSERT INTO employees (name, email, position) VALUES (?, ?, ?)';
    db.run(sql, [name, email, position], function(err) {
      callback(err, { id: this.lastID, ...data });
    });
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM employees';
    db.all(sql, [], callback);
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM employees WHERE id = ?';
    db.get(sql, [id], callback);
  },

  update: (id, data, callback) => {
    const { name, email, position } = data;
    const sql = 'UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?';
    db.run(sql, [name, email, position, id], function(err) {
      callback(err, { id, ...data });
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM employees WHERE id = ?';
    db.run(sql, [id], function(err) {
      callback(err, { changes: this.changes });
    });
  }
};

module.exports = Employee;