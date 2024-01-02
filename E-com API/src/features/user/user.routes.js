import express from 'express';
import UserController from './user.controller.js';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/signup', userController.getSignup);
userRouter.post('/signin', userController.getSignin)


export default userRouter;