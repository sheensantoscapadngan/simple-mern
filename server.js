import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';
import { ErrorHandler } from './middleware/ErrorHandler.js';
import userRouter from './routes/userRouter.js';
import connectDb from './db/connect.js';
import animalRouter from './routes/animalRouter.js';
import AuthHandler from './middleware/AuthHandler.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/animals', AuthHandler, animalRouter);

app.get('/api/v1', (req, res) => {
  res.send('hello world');
});

app.use(ErrorHandler);

const startServer = async () => {
  try {
    await connectDb(process.env.DB);
    app.listen(PORT, () => {
      console.log(`Server listening at port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
