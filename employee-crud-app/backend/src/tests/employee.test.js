// /tests/employee.test.js
const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/database');

// Clean up the database before and after tests
beforeAll((done) => {
  db.serialize(() => {
    db.run('DELETE FROM employees', done);
  });
});

afterAll((done) => {
  db.close(done);
});

describe('Employee API', () => {
  let employeeId;

  it('should create a new employee', async () => {
    const res = await request(app)
      .post('/api/employees')
      .send({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        position: 'Software Engineer',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    employeeId = res.body.id;
  });

  it('should fetch all employees', async () => {
    const res = await request(app).get('/api/employees');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a single employee by id', async () => {
    const res = await request(app).get(`/api/employees/${employeeId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', employeeId);
  });

  it('should update an employee', async () => {
    const res = await request(app)
      .put(`/api/employees/${employeeId}`)
      .send({
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        position: 'Senior Engineer',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Jane Smith');
  });

  it('should delete an employee', async () => {
    const res = await request(app).delete(`/api/employees/${employeeId}`);
    expect(res.statusCode).toEqual(204);
  });
});