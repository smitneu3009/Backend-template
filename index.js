// src/index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';
import userRoutes from './Routes/userRoutes.js';
import connection from './db.js';

// Load environment variables from .env file
dotenv.config();

const app = express(); // Initialize express application

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

// Use user routes
app.use('/api', userRoutes);

// Connect to the database and start the server
connection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`.green.bold);
    });
}).catch((err) => {
    console.error('Failed to connect to the database:', err);
});
