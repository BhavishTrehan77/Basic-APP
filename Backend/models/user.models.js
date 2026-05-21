const { default: mongoose } = require("mongoose");
const bcrypt=require('bcrypt')

const SchemaData=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

SchemaData.pre("save",async function(){
    const hashedPassword=await bcrypt.hash(this.password,10)
    this.password=hashedPassword
})

const User=mongoose.model('User',SchemaData)
module.exports=User