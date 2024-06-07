import request from 'supertest';
import app from '../index.js';

describe('User API', () => {
  it('should get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
    expect(res.body.users).toBeInstanceOf(Array);
  });
});
