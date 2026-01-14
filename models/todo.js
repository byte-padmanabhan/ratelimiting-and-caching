const mongoose=require("mongoose")
const todoSchema=new mongoose.Schema(
    {
        task:
        {
            type:String,
            required:true,
            unique:true
        },
        deadline:
        {
            type:String,
            required:true
        }
    }
)
const TODO=mongoose.model('todo',todoSchema)
module.exports=TODO