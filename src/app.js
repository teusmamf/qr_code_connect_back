import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';

import { verifyConnectionDatabase } from './config/database.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    console.log('API route accessed');
    res.send('Hello from the API QR Connect!');
});

// Middleware to error handling
app.use(errorHandler);

verifyConnectionDatabase();

export default app;
