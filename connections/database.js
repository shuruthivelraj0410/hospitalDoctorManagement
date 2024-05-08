import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sequelize_test','root','password',{
    host : "127.0.0.1",
    dialect : "mysql",
    port : 3306
})

sequelize.authenticate().then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log("Error in connecting database : ",err)
})

export {
    sequelize
}