import request from 'supertest';
import app from '../index.js';

describe('User API', () => {
  it('should get all users', async () => {
    // Increase timeout to 10 seconds
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  }, 10000); // Increase timeout to 10 seconds
});
