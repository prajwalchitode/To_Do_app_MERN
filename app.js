
// this file is only for handling middlewares

import express, { json } from 'express'

import { dbconnection } from './data/database.js';

import userRouter from './routes/user.js'
// task router 
import taskRouter from './routes/task.js'
import cors from 'cors'

// HANDLING ENV FILES
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import {  errorMiddleware } from './middleware/error.js';

// import { config } from 'dotenv';

dotenv.config({
    path:"./data/config.env"
});



// Middleware to use json data
export const app = express();

dbconnection();

// use to send json data as a res to user always use this before callling router
app.use(express.json());

// to access cookies we use cookie parser npm package

app.use(cookieParser())

app.use(cors({
    origin:'*',
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

// using routes --  user routes

app.use("/api/v1/users",userRouter);

// task routes

app.use("/api/v1/task",taskRouter);



//  ERROR HANDLING 

app.use(errorMiddleware);

app.use((err,req,res,next) =>{
console.log(err)
    return res.status(404).json({
        success:false,
        message:"Invalid id"
    })
    

})


