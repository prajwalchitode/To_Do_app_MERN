import mongoose from "mongoose";


// Db connnection
export const dbconnection = ()=> {
    mongoose.
    connect("mongodb://fileuplode:fileuplode@ac-25s0y3t-shard-00-00.t8qfp9v.mongodb.net:27017,ac-25s0y3t-shard-00-01.t8qfp9v.mongodb.net:27017,
ac-25s0y3t-shard-00-02.t8qfp9v.mongodb.net:27017/?ssl=true&replicaSet=atlas-u7w4pr-shard-0&authSource=admin&retryWrites=true&w=majority",{
    dbName:"LearningBackendApi",
})
.then(()=>console.log('Database connected successfully'))
.catch(e=> console.log(e))
};


