 const express =  require ("express")

 const router = express.Router()
 
  router.get("/user",(req,res,next)=>{
    res.send("message for user")

  })
   
  router.get("/user/:id",(req,res,next)=>{
    res.send("message for user from id")

  })




  module.exports=router