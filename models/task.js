

import express, { json } from 'express'
import mongoose from 'mongoose';



const schema = mongoose.Schema({
    title:{
        type:String,
       
        require:true,
    },
    description:{
        type:String,
        require:true,
        
    },
    isCompleted:{
        type: Boolean,
       default: false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    },
    createdAt:{
        type : Date,
        default: Date.now
    }
})

// db name -:++++++
export const Task = mongoose.model('Task',schema);

