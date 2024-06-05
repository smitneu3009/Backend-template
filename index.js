import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';
import connection from './db.js';

dotenv.config();

const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // specify allowed headers
    credentials: true, // enable passing cookies across origins
}));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green.bold);
})

connection();