// src/routes/userRoutes.js

import express from 'express';
import { getAllUsers, getUserById} from '../Controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

export default router;
