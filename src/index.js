const express = require('express');
const { isAuth } = require('./middleware/auth');
const {getuse}=require('./controller/controller_user')
const {handdleError} = require('./middleware/haddlerror.js')
 const {sum} = require("./add.js")
const user=require("./routes/index")
const dotenv = require("dotenv")

require("./config/database")

 const app = express();
app.use(express.json())

// middleware
app.get("/", (req, res) => {
  res.send("server is listening");
});
``
dotenv.config()

const port = process.env.PORT


app.get("",(req, res) => {
  res.send("server is listening");
})

app.use(user)

app.listen(port, () => {
  console.log("server is running on port ",port);
});



// install post man 
// install mongodb
// install mongosh  // git add . // git commit -m "message" // git push 