import {getDoctorDetails} from '../../queries/database/findDoctors.js'

const getDoctorResolver = async (parent,context,args,info)=>{
const data = await getDoctorDetails()
const res = {}
res.data = data
res.count = data.count
return res
}


export{
    getDoctorResolver
}