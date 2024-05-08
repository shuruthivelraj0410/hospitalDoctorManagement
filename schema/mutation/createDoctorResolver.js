import { createDoctor } from "../../queries/database/createDoctor.js"

const createDoctorResolver = async(parent, args, context , info)=>{
    const data = await createDoctor(args)
    const res ={};
    res.data = data
    return res;
}


export {
    createDoctorResolver
}