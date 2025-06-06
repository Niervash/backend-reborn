import express from 'express';
import verifyToken from '../middlewares/VerivyToken.js';
import verifyRole from '../middlewares/VerifyRole.js';
import validateData from '../middlewares/Validation.js';
import { createSchema } from '../validations/SchemaSubmissionService.js';
import {
  createSubmissionService,
  deleteSubmissionService,
  getSubmissionServiceUser,
} from '../controllers/SubmissionService.js';

const router = express.Router();

router.get(
  '/user',
  verifyToken,
  verifyRole(['user']),
  getSubmissionServiceUser
);
router.post(
  '/create',
  verifyToken,
  verifyRole(['user']),
  validateData(createSchema),
  createSubmissionService
);
router.delete(
  '/delete/:id',
  verifyToken,
  verifyRole(['user']),
  deleteSubmissionService
);

export default router;
