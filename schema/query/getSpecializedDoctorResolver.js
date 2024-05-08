import {recommendation} from '../../queries/database/recommendedDoctors.js'
const getSpecializedDoctorResolver = async(parent,args,context,info)=>{
   const data = await recommendation(args.doc_field)
const res ={}
res.data = data
return res
}


export {
    getSpecializedDoctorResolver
}