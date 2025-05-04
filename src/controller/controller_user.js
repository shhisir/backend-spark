 const {User} = require('../schemas/user')



 const getuser =async(req,res,next)=>{
   try{
      const user=await User.find()
      res.status(200).send(user)
   }
   catch(err){
      console.log(err)
      next(err)
   }}
 
const createUser=async(req,res,next)=>{
   try{
      const data=eq.body
      await User.create(data)
      res.status(200).send({message:"user created sucessfully"})
   } catch(err){
      conosole.log(err)
   }
}



 module.exports = {
   getuser,
   createUser
 }