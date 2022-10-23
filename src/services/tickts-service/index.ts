import { Prisma } from "@prisma/client"
import { create } from "../../repositories/ticket-repository"

export default async function newTicketPurchased(userId: number, ticketValue: number){

await create({userId, ticketValue})
}