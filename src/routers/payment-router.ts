import { paymentPost, paymentGet } from '@/controllers';
import { Router } from 'express'
import { authenticateToken, validateBody } from '@/middlewares';

const paymentRouter = Router();

paymentRouter
.all('/*', authenticateToken)
.post('/', paymentPost)
.get('/', paymentGet)

export { paymentRouter }