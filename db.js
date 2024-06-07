import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

const connection = async () => {
    try {
        const db = await mysql.createConnection({
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || 'admin',
            database: process.env.MYSQL_DATABASE || 'practice',
            charset: 'utf8mb4' // Correct charset
        });

        console.log('Database connected successfully'.bgGreen.bold);
        return db;
    } catch (error) {
        console.error('Error while connecting with the database'.bgRed.bold);
        throw error;
    }
};

export default connection;
