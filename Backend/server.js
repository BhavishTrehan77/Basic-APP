require('dotenv').config()
const express=require('express')
const { default: mongoose } = require('mongoose')
const router = require('./routes/user.routes')
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())


async function connectdb(){
    await mongoose.connect(process.env.DB_URL)
    console.log("successfully had a connection with db")
}
connectdb()


app.use("/api/v1/data",router)


app.listen(9000)