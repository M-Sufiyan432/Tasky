import express from 'express';
import { logout, me, signin, signup } from '../controllers/auth.controller.js';
import { refresh } from '../config/refresh.js';

const authRouter  = express.Router();

authRouter.post('/signup',signup);
authRouter.post('/signin',signin);
authRouter.post('/logout',logout)
authRouter.post('/refresh',refresh)
authRouter.get('/me',me)


export default authRouter;