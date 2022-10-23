import { paymentPost } from '@/controllers';
import { Router } from 'express'
import { authenticateToken, validateBody } from '@/middlewares';

const paymentRouter = Router();

paymentRouter
.all('/*', authenticateToken)
.post('/', paymentPost)

export { paymentRouter }