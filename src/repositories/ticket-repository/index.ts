import { prisma } from '@/config';
import { TicketsSold } from '@prisma/client';


export async function create(data: CreateTicketsSold) {
  console.log(data)
  return prisma.ticketsSold.create({
    data,
  });
}

const userRepository = {
  create,
};

export default userRepository;



export type CreateTicketsSold = Omit<TicketsSold, 'id' >;