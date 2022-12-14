import { conflictError, unauthorizedError } from '@/errors';
import hotelRepository from '@/repositories/hotel-repository';
import { Hotel } from '@prisma/client';

export type postHotelReserve = Omit<Hotel, 'createdAt' | 'id'>;

async function postHotelInformations(userId: number, hotelReservation: any) {
  const findUserReserve = await hotelRepository.isReservationAlredyDoneByUser(userId);
  if (findUserReserve !== null) throw conflictError('você já tem sua reserva');
  const hotelReserve = {
    userId: userId,
    image: hotelReservation.image,
    roomNumber: hotelReservation.roomNumber,
    hotelName: hotelReservation.hotelName,
    roomType: hotelReservation.roomType,
    roomCount: hotelReservation.roomCount,
  };
  await hotelRepository.createReservation(hotelReserve);
}

async function getHotelReserve(userId: number) {
  const findUserReserve = await hotelRepository.isReservationAlredyDoneByUser(userId);
  if (findUserReserve === null) throw conflictError('você não fez sua reserva');
  return findUserReserve;
}

async function updateRoomHotel(userId: number, roomNumber: number) {
  const reserve = await hotelRepository.updateRoom(userId, roomNumber);
  if (userId !== reserve.userId) throw conflictError('você não tem permissão para trocar de quarto!');
}
const hotelService = {
  postHotelInformations,
  getHotelReserve,
  updateRoomHotel,
};

export default hotelService;
