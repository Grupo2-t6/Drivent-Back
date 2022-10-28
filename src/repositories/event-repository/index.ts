import { prisma, redisClient } from '@/config';

async function findFirst() {
  const cacheExpiration =10000

  let eventRedis = await redisClient.get('eventKey')
  if(eventRedis){
    console.log(`eventRedis: ${eventRedis}`)
    return JSON.parse(eventRedis)
  }
  const event = await prisma.event.findFirst();
  console.log(event)
  console.log(`eventPrisma: ${event}`)
  redisClient.setEx("eventKey", cacheExpiration, JSON.stringify(event))

  return event
}

const eventRepository = {
  findFirst,
};

export default eventRepository;
