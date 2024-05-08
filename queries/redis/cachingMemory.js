import { redisClient } from "../../connections/redis.js";

const getCache = async(cacheName)=>{
    try{
   let getData = await redisClient.get(cacheName);
   return getData;
    }
    catch(e){
        console.log("Error in getting data from redis : ",e)
    }
}

const setCache = async(key,expiry = 0,data) =>{
    try{
    await redisClient.SETEX(key,expiry,data)
    }
    catch(e){
        console.log("Error in setting data in redis : ",e)
    }
}

const setCacheTime = async(key,value)=>{
    try{
        await redisClient.SET(key,value)
        }
        catch(e){
            console.log("Error in setting time data in redis : ",e)
        }
}
export {
    getCache,
    setCache,
    setCacheTime
}