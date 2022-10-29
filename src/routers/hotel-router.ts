import { getHotelInfo, postHotelInformations } from '@/controllers/hotel-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { hotelData } from '@/schemas/hotel-schema';
import { Router } from 'express';

const hotelRouter = Router();

hotelRouter.post('/', authenticateToken, validateBody(hotelData), postHotelInformations);
hotelRouter.get('/', authenticateToken, getHotelInfo);

export { hotelRouter };
