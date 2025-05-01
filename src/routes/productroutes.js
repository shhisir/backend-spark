 const express = require("express")

 
 router=express.Router()


 router.get("/Product",(req,res,next)=>{
    res.send([{product  :"All product"}])
 })


 module.express= router