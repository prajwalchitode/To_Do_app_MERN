
import jwt from 'jsonwebtoken';


export const sendCookie = (userr,res,message,statusCode=200)=>{

 // Generating token

 const token = jwt.sign({_id: userr._id},process.env.secret);
    // console.log(process.env.nodeenv);
    // console.log(process.env.nodeenv==="development")

 res.status(statusCode).cookie("token",token,{
     httpOnly:true,
     maxAge:15*60*1000,
     sameSite:process.env.nodeenv==="Development"?"lax":"none",
     secure:process.env.nodeenv==="Development"?false:true,
 })
 .json({
     success:true,
     message
 })


}