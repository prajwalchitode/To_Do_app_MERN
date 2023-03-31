import { app } from "./app.js";




app.listen(5000,()=>{
    // console.log(process.env.url);
    console.log(`Server is working on port:${process.env.PORT} in ${process.env.nodeenv} mode`);
    
})