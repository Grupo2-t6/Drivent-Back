import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { postActivity, activityVacancies } from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter.post('/:id', authenticateToken, postActivity);
activitiesRouter.get('/:id', activityVacancies);

export { activitiesRouter };
