const mongoose = require("mongoose")

// schema design 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is Required"]
    },
    email:{
        type:String,
        required:[true, "email is Required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "password is Required"]
    },
},{timestamps:true})

// export 
const userModel = mongoose.model("users",userSchema)

module.exports = userModel;