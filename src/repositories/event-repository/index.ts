import { prisma, redisClient } from '@/config';

async function findFirst() {
  const cacheExpiration =10000

  let eventRedis = await redisClient.get('eventKey1')
  if(eventRedis){
    return JSON.parse(eventRedis)
  }
  const event = await prisma.event.findFirst();
  console.log(`eventPrisma: ${event}`)
  redisClient.setEx("eventKey1", cacheExpiration, JSON.stringify(event))

  return event
}

const eventRepository = {
  findFirst,
};

export default eventRepository;
