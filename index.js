import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';
import connection from './db.js';

dotenv.config();

const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(express.json());
app.use(morgan('dev'));

// Define your routes here
app.get('/api/users', async (req, res) => {
    const db = await connection();
    const [rows] = await db.query('SELECT * FROM users');
    res.json({ users: rows });
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`.green.bold);
        connection();
    });
}

export default app; // Export the app for testing
