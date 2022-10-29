import { conflictError, unauthorizedError } from '@/errors';
import hotelRepository from '@/repositories/hotel-repository';
import { Hotel } from '@prisma/client';

export type postHotelReserve = Omit<Hotel, 'createdAt' | 'id'>;

async function postHotelInformations(userId: number, hotelReservation: any) {
  const findUserReserve = await hotelRepository.isReservationAlredyDoneByUser(userId);
  if (findUserReserve !== null) throw conflictError('you alredy have your reserve');
  const hotelReserve = {
    userId: userId,
    roomNumber: hotelReservation.roomNumber,
    hotelName: hotelReservation.hotelName,
    roomType: hotelReservation.roomType,
    roomCount: hotelReservation.roomCount,
  };
  await hotelRepository.createReservation(hotelReserve);
}

const hotelService = {
  postHotelInformations,
};

export default hotelService; 