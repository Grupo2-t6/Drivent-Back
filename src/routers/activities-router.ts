import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { postActivity } from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter.post('/:id', authenticateToken, postActivity);

export { activitiesRouter };
