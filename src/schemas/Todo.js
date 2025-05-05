   const mongoose = require("mongoose")
   const objectId = mongoose.Schema.Types.ObjectId
const router = require("../routes")
   const {todoSchema} = monoogodse.Schema({
    title: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
      },
      user: {
        type: ObjectId,
        ref: "User",
      },
    })

    const Todo = mongoose.model("Todo",todoSchema)
    module.experts=Todo