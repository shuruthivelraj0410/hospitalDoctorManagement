
import {recommendation} from '../database/recommendedDoctors.js';
import { doctorField } from '../../models/database/doctorFieldsBased.js';
import {getCache, setCache, setCacheTime} from '../redis/cachingMemory.js'
const getFieldsAvailable = async()=>{
    let data = await doctorField.findAll({
        attributes : ["specialized_fields"],
        group : ["specialized_fields"]
    })
    data = JSON.parse(JSON.stringify(data))
    return data;
}

const preload = async()=>{
    try{
    const today = new Date
    let categories = await getFieldsAvailable();
    if(categories != {}){
        let args = {};
     categories.forEach(async (data)=>{
        let details = await recommendation(data.specialized_fields)
        if(details){
           await setCache(data.specialized_fields,1800,JSON.stringify(details))
           await setCacheTime("last Cached Preload time",JSON.stringify(today))
        }
     })
    }
    else{
        console.log("Error in fetching categories :)")
    }
}
catch(e){
    console.log("Error in preload function : ",e)
}
}

export{
    preload
}
