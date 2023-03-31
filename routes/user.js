
import  express from "express";

import { DeleteUser, getalluser, getmyprofile, login, logout, register, updateUser } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";



// middle ware
const router = express.Router();

// routes

router.get('/all',getalluser)

router.get('/me',isAuthenticated,getmyprofile)

router.put('/userid/:id',updateUser);

router.delete('/userid/:id',DeleteUser);




router.get('/',(req,res)=>{
    res.send("Nice working")
})

router.post('/new',register);

router.post('/login',login);

router.get('/logout',logout);



export default router;