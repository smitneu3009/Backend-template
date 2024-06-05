// Importing necessary modules
import express from 'express'; // Express framework for building the server
import dotenv from 'dotenv'; // dotenv for loading environment variables from .env file
import cors from 'cors'; // CORS middleware for handling Cross-Origin Resource Sharing
import colors from 'colors'; // colors for adding color to console logs
import morgan from 'morgan'; // morgan for logging HTTP requests
import connection from './db.js'; // importing the database connection function

// Load environment variables from .env file
dotenv.config();

const app = express(); // Initialize express application

// CORS configuration
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Enable passing cookies across origins
}));

app.use(express.json()); // Middleware to parse JSON requests
app.use(morgan('dev')); // HTTP request logger

const PORT = process.env.PORT || 5000; // Set the port from environment variables or default to 5000

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green.bold); // Log that the server is running
});

// Connect to the database
connection();
