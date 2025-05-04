 const express =  require ("express")

 const {createUser, getuser} = require("../controller/controller_user")

 const router = express.Router()
 
  router.get("/user",getuser)
   
  



  module.exports=router