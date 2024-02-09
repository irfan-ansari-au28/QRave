
import redis from 'redis';
import { promisify } from 'util';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

const client = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD,
});

// Convert Redis client methods to promises to use async/await
client.get = promisify(client.get).bind(client);
client.set = promisify(client.set).bind(client);
client.del = promisify(client.del).bind(client);

client.on('connect', () => {
    console.log('------------- Redis client connected -------------');
});

client.on('error', (err) => {
    console.log('Redis client error', err);
});

// Use 
// import redisClient from './db/redisClient.js';

// async function cacheData(key, value) {
//     await client.set(key, value, {
//         EX: 60
//     }); // Expires in 60 seconds
// }

// async function retrieveCachedData(key) {
//     return await client.get(key);
// }


// cacheData('irfan4', 'irfan398649@gmail.com')
// retrieveCachedData('irfan')


export default client;
