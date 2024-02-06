import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import usersRoutes from './api/routes/users.js';
import connectDB from './db/mongoose.js';
import { connectPg,fetchUsers } from './db/postgres.js';


const app = express();

// Database
connectPg()
connectDB()
// fetchUsers()

app.use(cors());
app.use(helmet());
// For parsing application/json
app.use(express.json());

// Use the routes
app.use('/api/v1', usersRoutes);

app.get('/', (req, res) => {
    res.send('Server is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

