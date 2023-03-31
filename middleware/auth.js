import { user } from "../models/user.js";
import jwt from 'jsonwebtoken'

export const isAuthenticated = async(req,res,next)=>{

    const {token } = req.cookies;
   
    if(!token)return res.status(404).json({
        success:false,
        message:"Loggin first"
    }) 

    // decoding jwt token id

    const decod =  jwt.verify(token,process.env.secret);

        // getting info by decoded id

        req.userr= await user.findById(decod._id);
        next();

}