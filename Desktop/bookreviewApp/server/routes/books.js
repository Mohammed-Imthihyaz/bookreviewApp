import express from 'express';
import { body, query } from 'express-validator';
import { auth, adminAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import * as bookController from '../controllers/bookController.js';

const router = express.Router();

// Get all books with pagination
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 }),
  validate
], bookController.getBooks);

// Get a specific book
router.get('/:id', bookController.getBook);

// Add a new book (admin only)
router.post('/', [
  auth,
  adminAuth,
  body('title').trim().notEmpty(),
  body('author').trim().notEmpty(),
  body('description').trim().notEmpty(),
  body('cover').trim().isURL(),
  body('price').isFloat({ min: 0 }),
  body('genre').isIn(['fiction', 'non-fiction', 'mystery', 'sci-fi']),
  validate
], bookController.createBook);

export default router;