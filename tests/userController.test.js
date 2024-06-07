import request from 'supertest';
import app from '../index.js';

describe('User API', () => {
  it('should get all users', async () => {
    try {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('users');
      // Add additional expectation to check the user data returned
      expect(res.body.users).toHaveLength(1); // Assuming there is one user in the response
      expect(res.body.users[0].user_id).toBe(1); // Assuming the user_id is 1
      expect(res.body.users[0].user_name).toBe('smit'); // Assuming the user_name is 'smit'
    } catch (error) {
      console.error('Error during test execution'.bgRed.bold);
      throw error;
    }
  });
});
