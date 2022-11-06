import { prisma } from '@/config';
import { TicketsSold } from '@prisma/client';


export async function create(data: CreateTicketsSold) {
  return prisma.ticketsSold.create({
    data,
  });
}

export async function isTicket(userId: number) {
  return prisma.ticketsSold.findFirst({
    where:{
      userId
    }
  });
}

const userRepository = {
  create,
  isTicket,
};

export default userRepository;



export type CreateTicketsSold = Omit<TicketsSold, 'id' >;