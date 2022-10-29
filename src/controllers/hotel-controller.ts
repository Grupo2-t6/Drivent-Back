import { AuthenticatedRequest } from '@/middlewares';
import hotelService from '@/services/hotel-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function postHotelInformations(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const hotelResevation = req.body;

  await hotelService.postHotelInformations(userId, hotelResevation);

  return res.sendStatus(httpStatus.OK);
}
