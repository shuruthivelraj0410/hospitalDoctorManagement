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

const getDoctorDetails = async()=>{
let data = await doctorData.findAndCountAll({
    include : {
        model : doctorField
    }
})
data = JSON.parse(JSON.stringify(data))
return data
};




export {
    getDoctorDetails 
}