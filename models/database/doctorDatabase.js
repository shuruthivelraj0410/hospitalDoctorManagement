import { DataTypes } from 'sequelize';
import {sequelize} from '../../connections/database.js';

const doctorData = sequelize.define('doctors',{
    id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    doctor_name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    doctor_emailId :{
         type :DataTypes.STRING,
         allowNull : false,
         unique : true
    },
    joined_date :{
        type : DataTypes.INTEGER,
        allowNull : false
    }
})

sequelize.sync().then(()=>{
    console.log("Doctors model created")
}).catch((e)=>{
    console.log("Error in creating a model : ",e)
})

export {
    doctorData
}