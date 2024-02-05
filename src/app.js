import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import usersRoutes from './api/routes/users.js';


const app = express();

app.use(cors());
app.use(helmet());
// For parsing application/json
app.use(express.json());

// Use the routes
app.use('/api', usersRoutes);

app.get('/', (req, res) => {
    res.send('Server is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

