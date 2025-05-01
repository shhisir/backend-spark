 const isAuth=(req,res,next)=>{
    const authenticated =  true 
    if (authenticated){
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
      
 


