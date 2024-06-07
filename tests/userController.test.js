import request from 'supertest';
import app from '../index.js';

describe('User API', () => {
    it('should get all users', async () => {
        try {
            // Increase timeout to 15 seconds (adjust as necessary)
            jest.setTimeout(15000);
            const res = await request(app).get('/api/users');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('users');
        } catch (error) {
            console.error('Error during test execution'.bgRed.bold);
            throw error;
        }
    });
});
