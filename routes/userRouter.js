import express from 'express';
import { logIn, signUp, testJWT } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/sign-up', signUp);
userRouter.post('/login', logIn);
userRouter.post('/testJWT', testJWT);

export default userRouter;
