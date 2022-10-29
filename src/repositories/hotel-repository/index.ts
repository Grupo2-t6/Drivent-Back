import { prisma } from '@/config';
import { postHotelReserve } from '@/services/hotel-service';

async function createReservation(data: postHotelReserve) {
  return prisma.hotel.create({
    data,
  });
}
async function isReservationAlredyDoneByUser(userId: number) {
  return prisma.hotel.findFirst({
    where: { userId },
  });
}

const hotelRepository = {
  createReservation,
  isReservationAlredyDoneByUser,
};

export default hotelRepository;
