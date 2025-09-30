// /src/App.js
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import EmployeeList from './components/EmployeeList.js';
import EmployeeForm from './components/EmployeeForm';
import EditModal from './components/EditModal';
import SearchBar from './components/SearchBar';
import './App.css';

const API_URL = 'http://localhost:5001/api/employees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAddEmployee = async (employee) => {
    try {
      await axios.post(API_URL, employee);
      fetchEmployees();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleUpdateEmployee = async (employee) => {
    try {
      await axios.put(`${API_URL}/${employee.id}`, employee);
      setEditingEmployee(null);
      fetchEmployees();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const filteredEmployees = useMemo(() =>
    employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [employees, searchTerm]);

  return (
    <div className="container">
      <h1>Employee Management System</h1>
      <EmployeeForm onAdd={handleAddEmployee} />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <EmployeeList
        employees={filteredEmployees}
        onEdit={setEditingEmployee}
        onDelete={handleDeleteEmployee}
      />
      {editingEmployee && (
        <EditModal
          employee={editingEmployee}
          onUpdate={handleUpdateEmployee}
          onClose={() => setEditingEmployee(null)}
        />
      )}
    </div>
  );
}

export default App;