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

export async function getHotelInfo(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const hotelReserve = await hotelService.getHotelReserve(userId);

  return res.status(httpStatus.OK).send(hotelReserve);
}

export async function updateRoomHotel(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { roomNumber } = req.body;

  const hotelReserve = await hotelService.updateRoomHotel(userId, roomNumber);

  return res.status(httpStatus.OK).send(hotelReserve);
}
