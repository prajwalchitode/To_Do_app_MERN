import mongoose from "mongoose";


// Db connnection
export const dbconnection = ()=> {
    mongoose.
    connect("mongodb://localhost:27017",{
    dbName:"LearningBackendApi",
})
.then(()=>console.log('Database connected successfully'))
.catch(e=> console.log(e))
};