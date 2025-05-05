 const Todo = require('../model/todo.model')
 
 
 
 
 
 const getTodo = async(req,res,next)=>{
    console.log(req.qurey)
    try{
        const options = {}

            if(req.qurey.status)  {
    options.status = req.qurey.status
    }
        
    
    
    const data = await Todo.find(options).populate("user")  
    res.status(200).send(data)
        }
    catch(err){
    next(err)
    }
 }



 const createTodo = async() =>{
    try{
        const data = req.body
        res.status(200).send({message:"todo created successfully"})

    } 
    catch(err){
        console.log(err)
        next(next)  
      }
 }

 
 module.exports = {
    getTodo,
    createTodo
 }

