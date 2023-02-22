
const transectionModel = require("../models/transectionModels.js")

const getAllTransection = async(req, resp)=>{
    try {
        const transections = await transectionModel.find({userid:req.body.userid})
        resp.status(200).send(transections)
    } catch (error) {
        console.log(error)
    resp.status(500).json(error)
    }
}

const addTransection = async(req, resp)=>{
    console.log(req.body)
try {
    const newTransection = new transectionModel(req.body)
    await newTransection.save()
    resp.status(201).json({status:1,msg:"Transection Created"})
} catch (error) {
    // console.log(error)
    resp.status(500).json(error)
}
}

const deleteTranection = async(req,resp)=>{
try {
    await transectionModel.findOneAndDelete({_id:req.body.transectionId})
    resp.status(200).send("Transection Deleted")
} catch (error) {
    console.log(error)
    resp.status(500).json(error)
}
}

const editTranection = async(req,resp)=>{
    try {
        await transectionModel.findOneAndUpdate({_id : req.body.transectionId})
        resp.status(200).send("Transection Edited")
    } catch (error) {
        console.log(error)
        resp.status(500).json(error)
    }
    }
module.exports = {addTransection,getAllTransection,deleteTranection, editTranection}