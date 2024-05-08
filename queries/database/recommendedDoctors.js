import { doctorData } from '../../models/database/doctorDatabase.js';
import { doctorField } from '../../models/database/doctorFieldsBased.js';

doctorData.hasMany(doctorField, {
    foreignKey: 'doctor_emailId',
    sourceKey: 'doctor_emailId',

})
doctorField.belongsTo(doctorData, {
    foreignKey: 'doctor_emailId',
    targetKey: 'doctor_emailId'
})

const recommendation = async(args)=>{
let data = await doctorField.findAll({
 include :{
    model :doctorData
},
where :{
    specialized_fields : args
}
})
data = JSON.parse(JSON.stringify(data));
return data
};

export {
    recommendation 
}

