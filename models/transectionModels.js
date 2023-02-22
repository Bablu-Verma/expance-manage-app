const mongoose = require("mongoose")

const transectionSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:[true, "ID is required"]
    },
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    amount:{
        type:Number,
        required:[true, "Amount is required"]
    },
    category:{
        type:String,
        required:[true, "Category is required"]
    },
    modeType:{
        type:String
    },
    description:{
        type:String,
        required:[true, "Description is required"]
    },
    date:{
        type:Date,
        required:[true, "Date is required"]
    },
},{timestamps:true})

const transectionModel = mongoose.model('transection',transectionSchema)
module.exports = transectionModel