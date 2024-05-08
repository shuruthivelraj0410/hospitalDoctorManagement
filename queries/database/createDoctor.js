import { doctorData } from '../../models/database/doctorDatabase.js';
import { doctorField } from '../../models/database/doctorFieldsBased.js';


const createDoctor = async (args) => {
   const data = await doctorData.findOrCreate({
        where :{
            doctor_emailId : args.emailId
        },
        defaults :{
            doctor_emailId : args.emailId,
            doctor_name : args.name,
            joined_date : args.date
        }
    }).then(async ()=>{
        return await doctorField.findOrCreate({
            where :{
                doctor_emailId : args.emailId
            },
            defaults :{
                doctor_name : args.name,
                doctor_emailId : args.emailId,
                specialized_fields : args.field
            }
        })
    })
    return data
};

export {
    createDoctor
}