import { createClient } from "redis";
import dotenv from 'dotenv'

dotenv.config()

export const redisClient = createClient({
        url: process.env.REDIS_URL,
    });

    (async () => {
        await redisClient.connect();
    })();

    