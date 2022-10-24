import { create, isTicket } from '@/repositories/ticket-repository';
import { conflictError } from '@/errors';

export default async function newTicketPurchased(userId: number, ticketValue: number){

const ticketPurchased = await isTicket(userId)
if(ticketPurchased){
    throw conflictError("Ticket already purchased");
}

await create({userId, ticketValue})
}