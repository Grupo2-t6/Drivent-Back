import { AuthenticatedRequest } from '@/middlewares';
import activitiesService from '@/services/activities-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function postActivity(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const activity = Number(req.params.id);
  await activitiesService.validateVacancieActivityByTime(userId, activity);
  return res.sendStatus(httpStatus.CREATED);
}
