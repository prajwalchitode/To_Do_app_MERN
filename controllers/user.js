

import {user} from '../models/user.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { sendCookie } from '../utils/features.js';


// finding all users form the database


export const getalluser = async(req,res,next)=>{

   try {

    const users = await user.find({});
    res.json({
        success:true,
        users
    })
    
   } catch (error) {
    next(error)
   }
 
 };

 // REGISTER ROUTE
// Adding new user to the database Or register route

export const register = async(req,res,next)=>{

    try {

        const{name,email,password} = req.body;
   
    let userr = await user.findOne({email});

    if(userr) return res.status(404).json({
        success:false,
        message:"User already exist"
    })

    const hashedpas = await bcrypt.hash(password,10);

    userr = await user.create({
        name,
        email,
        password:hashedpas
    })

    // Calling send cookie function 

    sendCookie(userr,res,"Register Successfully",201);

        
    } catch (error) {
        next(error)
    }
   

}


//  lOGIN ROUTE ----------------------------------    >>>>>>>>>>>>>>>      <<<<<<<<<<<<<<<<<<<



export const login = async(req,res,next)=>{

    try {

        const {name,email,password} = req.body;

        const userr = await user.findOne({email}).select("+ password")
    
        if(!userr) return res.status(404).json({
            success:false,
            message:"Invalid Email or Password"
        }) 
    
    
        const isMatch = await bcrypt.compare(password,userr.password);
    
    
        
        if(!isMatch) return res.status(404).json({
            success:false,
            message:"Invalid Email or Password"
        }) 
    
    
        // If all condition matched then call sendcookie
    
        console.log(`${name}`);
        sendCookie(userr,res,`Welcome back,${userr.name}`,200)
        
    } catch (error) {
        next(error)
    }
   
    }

// LOGOUT ROUTE  -------------------------- =============        .>>>>>>>>>>><<<<<<<<<<

 export const logout = (req,res,next)=>{

    try {
        
        res.status(200).cookie("token","",{
            
            expires:new Date(Date.now()),
        
            sameSite:process.env.nodeenv==="Development"?"lax":"none",
            secure:process.env.nodeenv==="Development"?false:true,
        
        }).json({
            success:true,
            message:"Logout Successfully"
           })

    } catch (error) {
        
        next(error)
    }


 }


 // finding single user from the database

 export const getmyprofile = (req,res,next)=>{

        try {

            
   res.status(202).json({
    success:true,
    userr:req.userr
   })
            
        } catch (error) {
            next(error)
        }

}




export const updateUser = async(req,res)=>{

    const {id} =  req.params;

    const userr = await user.findById(id); 

    res.json({
        success:true,
        message:"updated user",
    })
}



export const DeleteUser = async(req,res)=>{

    const {id} =  req.params;

    const userr = await user.findById(id); 

    await user.deleteOne();

    res.json({
        success:true,
        message:"Deleted user",
    })
}



