import { AuthenticatedRequest } from '@/middlewares';
import activitiesService from '@/services/activities-service';
import { Response, Request } from 'express';
import httpStatus from 'http-status';

export async function postActivity(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const activity = Number(req.params.id);
  await activitiesService.PostActivity(userId, activity);
  return res.sendStatus(httpStatus.CREATED);
}
export async function activityVacancies(req: Request, res: Response) {
  const activyId = parseInt(req.params.id);
  const result = await activitiesService.vacancies(activyId);

  res.status(200).send(result);
}
