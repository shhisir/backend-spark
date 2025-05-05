   const mongoose = require("mongoose")
   const objectId = mongoose.Schema.Types.ObjectId
const router = require("../routes")
   const {todoSchema} = monoogodse.Schema({
    tittle:{
        type:String,
        required:true, 
    },
    status:{
        enum : ["pending","completed"],
        default:"pending"},
    user:{
        type:objectId,
        ref:"User",
    }
    })

   

    const Todo = mongoose.model("Todo",todoSchema)
    module.experts=Todo