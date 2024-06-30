import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

// Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors(
    {
        origin : ["https://nostalgia-net-frontend.vercel.app"],
        method : ["GET", "POST", "PATCH", "DELETE"],
        credentials : true
    }
));

app.get('/', (req, res) => {
    res.send(`<center><h1>Hello from server. </h1><h2> Use /posts and /users endpoint</h2></center>`);
});
app.use('/posts', postRoutes);
app.use('/users', userRoutes);


const PORT = process.env.PORT ;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((error) => console.log(error.message));


module.exports = app;

