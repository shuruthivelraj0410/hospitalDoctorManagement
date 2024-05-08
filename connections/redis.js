import redis from 'redis';

const redisClient = redis.createClient({
    url : `redis://127.0.0.1:6379/4`
});

(async()=>{
    try{
    await redisClient.connect()
    console.log("redis connected")
    }
    catch(e){
        console.log("Error in connecting redis : ",e)
    }
})()

export {
    redisClient
}