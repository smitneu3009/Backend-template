import request from 'supertest';
import app from '../index.js';
import connection from '../db.js';

describe('User API', () => {
    it('should get all users', async () => {
        try {
            const res = await request(app).get('/api/users');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('users');
            expect(res.body.users).toHaveLength(1); // Assuming there is one user in the response
            expect(res.body.users[0].user_name).toBe('smit'); // Assuming the user_name is 'smit'
        } catch (error) {
            console.error('Error during test execution:', error.message.bgRed.bold);
            throw error;
        }
    });

    it('should connect to the database', async () => {
        try {
            const db = await connection();
            expect(db).toBeTruthy();
        } catch (error) {
            console.error('Error during database connection test:', error.message.bgRed.bold);
            throw error;
        }
    });
});
