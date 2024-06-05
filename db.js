import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

// Load environment variables from .env file
dotenv.config();

const connection = async () => {
    const URL = process.env.MONGODB_URL;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully'.bgGreen.bold);
    } catch (error) {
        console.log('Error while connecting with the database'.bgRed.bold);
    }
};

export default connection;
