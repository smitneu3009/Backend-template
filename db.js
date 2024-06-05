// Importing necessary modules
import mongoose from 'mongoose'; // Mongoose for MongoDB interaction
import dotenv from 'dotenv'; // dotenv for loading environment variables from .env file
import colors from 'colors'; // colors for adding color to console logs

// Load environment variables from .env file
dotenv.config();

// Asynchronous function to connect to the database
const connection = async () => {
    const URL = process.env.MONGODB_URL; // Get the MongoDB URL from environment variables
    try {
        // Connect to MongoDB
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully'.bgGreen.bold); // Log success message
    } catch (error) {
        console.log('Error while connecting with the database'.bgRed.bold); // Log error message
    }
};

export default connection; // Export the connection function as default
