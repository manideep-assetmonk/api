const mongoose=require("mongoose")

const usersSchema= new mongoose.Schema({
    name:
    { type:String,
    required:true,
    unique:true
},

phone:
{type:Number,
    required:true,
    default:0
},

    address:{type:String,
    required:true}
     
})
module.exports=mongoose.model('User',usersSchema)