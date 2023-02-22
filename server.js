const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
require("colors")

const connectDB = require("./config/db.js")


// rest object 
const app = express()

// middlewares 
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())



// env 
dotenv.config()

// call db 
connectDB()

// port url 
const port = process.env.PORT_URL || 8080

// welcome routes 
app.get("/",(req, res)=>{
    res.send(`<h1>Welcome to expance manage App</h1>`)
})
// router 
app.use("/api/v1/user",require("./routes/userRoutes"))
app.use("/api/v1/transection",require("./routes/transectionRoutes"))
// app listen 
app.listen(port,()=>{
    console.log(`app listen in port ${port}`.bgWhite)
})