// /src/components/EmployeeList.js
import React from 'react';

function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => onEdit(employee)} className="edit-btn">Edit</button>
                <button onClick={() => onDelete(employee.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeList;