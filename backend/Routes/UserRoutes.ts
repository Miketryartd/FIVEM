import Users from '../Models/Users.js';
import express from 'express';
import { userRegister } from '../Controllers/UserController.js';
const router = express.Router();


router.post('/api/user/register', userRegister);


export default router;