const express = require('express');
const { isAuth } = require('./middleware/auth');
const {getuse}=require('./controller/controller_user')
const {handdleError} = require('./middleware/haddlerror.js')
 const {sum} = require("./add.js")
const user=require("./routes/index")
const dotenv = require("dotenv")



 const app = express();


// middleware
app.get("/", (req, res) => {
  res.send("server is listening");
});
``
dotenv.config()

const port = process.env.PORT



app.get("/test",isAuth,getuse)


app.listen(port, () => {
  console.log("server is running on port ");
});



// install post man 
// install mongodb
// install mongosh 