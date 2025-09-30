// /src/components/EmployeeForm.js
import React, { useState } from 'react';

function EmployeeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!position) newErrors.position = 'Position is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    onAdd({ name, email, position });
    setName('');
    setEmail('');
    setPosition('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>Add New Employee</h2>
      <div className="form-group">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
        {errors.position && <span className="error">{errors.position}</span>}
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}
export default EmployeeForm;