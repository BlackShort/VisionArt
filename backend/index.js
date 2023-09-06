import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDb from './mongodb/conncet.js';
import postRoutes from './routes/PostRoute.js';
import visionRoutes from './routes/VisionRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/vision', visionRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'This is VisionArt!',
    });
});

const startServer = async () => {
    try {
        connectDb(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Sever Started!'));
    } catch (error) {
        console.log(error);
    }
};

startServer();
