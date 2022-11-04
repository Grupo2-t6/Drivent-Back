import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getUserActivities, postActivity } from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter.post('/:id', authenticateToken, postActivity);
activitiesRouter.get('/', authenticateToken, getUserActivities);

export { activitiesRouter };
