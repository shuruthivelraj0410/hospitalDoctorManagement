import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/database.js";

const doctorField = sequelize.define('doctor_fields',{
    id:{
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
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
    specialized_fields:{
        type : DataTypes.STRING,
        allowNull : false,
        defaultValue : "General",
    }
})

sequelize.sync().then(()=>{
    console.log("doctor_fields synced successfully")
}).catch((e)=>{
    console.log("Error while syncing ")
})

export {
    doctorField
}