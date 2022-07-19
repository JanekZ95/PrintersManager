import express from 'express';
import * as signUpController from '../controllers/signUpController.js';

const signUpRouter = express.Router();

signUpRouter.post('/signUp', signUpController.signUp);

export default signUpRouter;