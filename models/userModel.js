const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"Please provide your name"],
},
email:{
    type: String,
    unique: true,
    required:[true,"Please provide your email address"],
},
password:{
    type:String,
    required:[true,"Please provide a password"]
},
},
{
    timestamps:true
})


const userModel = mongoose.model('users',userSchema)

module.exports= userModel;