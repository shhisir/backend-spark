 
 const dotenv = require("dotenv")
 dotenv.config()
 const mongoose = require("mongoose")
 const uri = process.env.MONGODB_URI 
  console.log(uri)


  mongoose.connect(uri)
  .then(() => console.log("connected"))