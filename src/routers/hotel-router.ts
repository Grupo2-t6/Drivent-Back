import { getHotelInfo, postHotelInformations, updateRoomHotel } from '@/controllers/hotel-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { hotelData } from '@/schemas/hotel-schema';
import { Router } from 'express';

const hotelRouter = Router();

hotelRouter.post('/', authenticateToken, validateBody(hotelData), postHotelInformations);
hotelRouter.get('/', authenticateToken, getHotelInfo);
hotelRouter.put('/', authenticateToken, updateRoomHotel);

export { hotelRouter };
