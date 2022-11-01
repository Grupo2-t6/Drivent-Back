import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { validateVacancieActivityByTime } from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter.post('/:id', authenticateToken, validateVacancieActivityByTime);

export { activitiesRouter };
