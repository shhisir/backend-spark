 const jwt = require("jsonwebtoken")
 const isAuth=(req,res,next)=>{


    let  tokenUser 
    const token = req.headers.authorization.split(" ")[1]
    if (token){
        authenticated = true
        let tokenUser = jwt.verify(token, 'shhhhh')
       
    }

    
    if (authenticated){
        req.user = tokenUser
        next()
    }
    else{
        res.staus(401).sen("Not athenticated")
        const err = "this is error"
        next(err)
    } 
}
 

 module.exports =  {
    isAuth
 }
      
 


