import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

export const getAllUsers = async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error('Database query failed', error);
        res.status(500).send('Database query failed');
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM users WHERE user_id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error('Database query failed', error);
        res.status(500).send('Database query failed');
    }
};