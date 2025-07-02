import redis from 'redis';

const client = redis.createClient({ url: process.env.REDIS_URL });
await client.connect();

export const getCache = async (key) => {
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
};

export const setCache = async (key, value, ttl = process.env.CACHE_TTL) => {
  await client.set(key, JSON.stringify(value), { EX: ttl });
};

export const cacheMiddleware = (keyGenerator) => {
  return async (req, res, next) => {
    const key = keyGenerator(req);
    const cached = await getCache(key);
    
    if (cached) {
      console.log(`Serving from cache: ${key}`);
      return res.json(cached);
    }
    
    // Override res.json to cache response
    const originalJson = res.json;
    res.json = (body) => {
      setCache(key, body);
      originalJson.call(res, body);
    };
    
    next();
  };
};