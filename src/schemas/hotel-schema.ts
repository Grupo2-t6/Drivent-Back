import Joi from 'joi';

export const hotelData = Joi.object({
  roomNumber: Joi.number().required(),
  hotelName: Joi.string().required(),
  roomType: Joi.string().required(),
  roomCount: Joi.string().required(),
});

export default hotelData; 