// Importing necessary modules
import mysql from 'mysql2/promise'; // Importing mysql2
import dotenv from 'dotenv'; // Importing dotenv for loading environment variables

// Load environment variables from .env file
dotenv.config();

// Asynchronous function to connect to the database
const connection = async () => {
    try {
        // Create a connection to the MySQL database
        const db = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });

        console.log('Database connected successfully'.bgGreen.bold); // Log success message
        return db;
    } catch (error) {
        console.log('Error while connecting with the database'.bgRed.bold); // Log error message
        throw error;
    }
};

export default connection; // Export the connection function as default
