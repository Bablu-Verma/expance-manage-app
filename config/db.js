const mongoose = require("mongoose");
require("colors")
const dotenv = require("dotenv")

dotenv.config()

const db_url = process.env.db_URL

const connectDB = async ()=>{
  try {
    let conn = await  mongoose.connect(db_url,{
                useNewUrlParser: true,
                useUnifiedTopology: true
              });

        console.log(`mongodb connected in => ${conn.connection.host}`.bgBlue)
  } catch (error) {
    console.log(`mongodb err => ${error}`.bgRed)
  }
}

module.exports = connectDB