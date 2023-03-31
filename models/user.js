import express, { json } from 'express'
import mongoose from 'mongoose';





const schema = mongoose.Schema({
  name:{
    type:String,
    require:true,
},
    email:{
        type:String,
        unique: true,
        require:true,
    },
    password:{
        type: String,
        select:false,
        require:true,
    },
    createdAt:{
        type : Date,
        default: Date.now
    }
})

// db name -:++++++
export const user = mongoose.model('user',schema);

