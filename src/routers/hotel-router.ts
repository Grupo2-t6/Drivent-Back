import { postHotelInformations } from '@/controllers/hotel-controller';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const hotelRouter = Router();

hotelRouter.post('/', authenticateToken, postHotelInformations);

export { hotelRouter };
