import { Router } from 'express';
import { FeedbackController } from './controllers/FeedbackController';

const router = Router();

const feedbackController = new FeedbackController();

router.post('/feedbacks', feedbackController.create)

export { router };