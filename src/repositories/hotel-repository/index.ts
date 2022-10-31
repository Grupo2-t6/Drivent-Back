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

async function updateRoom(userId: number, roomNumber: number) {
  return prisma.hotel.update({
    where: { userId },
    data: { roomNumber },
  });
}

const hotelRepository = {
  createReservation,
  isReservationAlredyDoneByUser,
  updateRoom,
};

export default hotelRepository;
