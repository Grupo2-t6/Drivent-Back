import {newTicketPurchased, getTicketValue} from '@/services/tickts-service';
import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';

export async function paymentPost(req: AuthenticatedRequest, res: Response) {
  const { value } = req.body;
  const { userId } = req;
  
  await newTicketPurchased(userId, value);
  return res.sendStatus(httpStatus.OK);
}

export async function paymentGet(req: AuthenticatedRequest, res: Response){
  const { userId } = req;
  const ticketValue =  await getTicketValue(userId);
  return res.send({ticketValue}).status(httpStatus.OK);
}
