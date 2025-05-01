 
 const dotenv = require("dotenv")
 const mongosh = require("mongosh")
 const uri = process.env.MONGO_URI
  console.log(uri)


  moosgooese.connect(uri)
  .then(() => console.log("connected"))