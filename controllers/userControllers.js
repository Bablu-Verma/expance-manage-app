const userModel = require("../models/userModel");
require("colors")

// login
const loginController = async (req, resp) => {
  // resp.send("login page")
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return resp.status(200).send({
        status:0,
        message:"User Not Found"
      });
    }else{
      resp.status(200).json({
        success:true,
        user
    });
    }
    
  } catch (error) {
    resp.status(400).json({
      success: false,
      error,
    });
  }
};

// register
const registerController =  async (req, resp) => {
  // console.log(`${req.body}`.bgCyan)
    try {
      let {email} = req.body
      
     let  dbEmail = await userModel.findOne({ email });
       if(dbEmail){
        resp.status(200).json({
          success:false,
          status:0,
          message:"Try Another Email"
      });
       }else{
        const newUser = new userModel(req.body)
        await newUser.save();
       resp.status(201).json({
           success:true,
           newUser
       });
       }
      
    } catch (error) {
      resp.status(400).json({
        success: false,
        error,
      });
    }
  };

module.exports = { loginController, registerController };
