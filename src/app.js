import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import usersRoutes from './api/routes/users.js';
import connectDB from './db/mongoose.js';
import { connectPg, fetchUsers } from './db/postgres.js';
import morganMiddleware from './config/morganMiddleware.js';
import client from './db/redisClient.js'

const app = express();
import 'dotenv/config';


// logger
app.use(morganMiddleware);

// Database connections
const dbConnections = async () => {
    await client.connect();
    await connectPg()
    await connectDB()
}
dbConnections()

// fetchUsers()

app.use(cors({
    origin: 'http://localhost:5000'
}));
// app.use(helmet());
// For parsing application/json
app.use(express.json());

// User routes
app.use('/api/v1', usersRoutes);

app.get('/', (req, res) => {
    res.send('Server is running...');
});


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('Shutting down server...');

    // Close the Redis connection
    await client.disconnect();
    console.log('Redis client disconnected');

    // Stop the server
    server.close(() => {
        console.log('Server shut down');
        process.exit(0);
    });
});