import express from 'express';
import connecttomongo from './db.js';
import auth from './routes/auth.js';
import post from './routes/post.js';
import cors from 'cors';
import Contact from './routes/Contact.js';
import dotenv from 'dotenv';
import comment from './routes/comment.js';
import path from 'path';

// Environment Variables
dotenv.config();

const app = express();

// Port Configuration
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Root Route
app.get('/', (req, res) => {
    res.send('Crime Portal Backend is Running!');
});

// API Routes
app.use('/api/auth', auth);
app.use('/api/posts', post);
app.use('/api/contact', Contact);
app.use('/api/post/comment', comment);

// Static Folder for Images
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Start Server After MongoDB Connection
const startServer = async () => {
    try {
        await connecttomongo();

        app.listen(port, '0.0.0.0', () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.log('Server Connection Error:', error);
        process.exit(1);
    }
};

startServer();