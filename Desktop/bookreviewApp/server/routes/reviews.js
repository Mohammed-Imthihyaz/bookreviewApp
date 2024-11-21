import express from 'express';
import { body } from 'express-validator';
import { auth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import * as reviewController from '../controllers/reviewController.js';

const router = express.Router();

// Get reviews for a book
router.get('/:bookId', reviewController.getBookReviews);

// Submit a new review
router.post('/', [
  auth,
  body('bookId').isMongoId(),
  body('rating').isInt({ min: 1, max: 5 }),
  body('content').trim().notEmpty(),
  validate
], reviewController.createReview);

export default router;