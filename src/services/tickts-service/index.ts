import { create, isTicket } from '@/repositories/ticket-repository';
import { conflictError } from '@/errors';

export async function newTicketPurchased(userId: number, ticketValue: number){

const ticketPurchased = await isTicket(userId)
if(ticketPurchased){
    throw conflictError("Ticket already purchased");
}

await create({userId, ticketValue})
}

export async function getTicketValue(userId: number){
    const ticketPurchased = await isTicket(userId)
    if(!ticketPurchased){
        return 0
    }
    return ticketPurchased.ticketValue

}