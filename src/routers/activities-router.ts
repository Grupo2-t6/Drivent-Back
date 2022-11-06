import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { postActivity, activityVacancies, getActivities} from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter.post('/:id', authenticateToken, postActivity);
activitiesRouter.get('/:id', activityVacancies);
activitiesRouter.get('/getA', getActivities)

export { activitiesRouter };
