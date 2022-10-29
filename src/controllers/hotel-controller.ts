import { AuthenticatedRequest } from '@/middlewares';
import hotelService from '@/services/hotel-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function postHotelInformations(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  await hotelService.postHotelInformations(userId);

  return res.sendStatus(httpStatus.OK);
}
