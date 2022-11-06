import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getActivities} from '@/controllers/activities-controller';

const activitiesGetARouter = Router();

activitiesGetARouter.get('/', getActivities)

export { activitiesGetARouter };
 