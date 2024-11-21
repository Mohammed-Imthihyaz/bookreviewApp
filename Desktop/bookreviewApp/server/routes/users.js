import express from 'express';
import { body } from 'express-validator';
import { auth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// Get user profile
router.get('/:id', auth, userController.getProfile);

// Update user profile
router.put('/:id', [
  auth,
  body('name').optional().trim().notEmpty(),
  body('email').optional().isEmail(),
  body('avatar').optional().isURL(),
  validate
], userController.updateProfile);

export default router;