const User = require("../models/user.models")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const Signup=async(data)=>{
    return User.create(data)
}
const Login=async(email,password)=>{
    const user=await User.findOne({email})
    if(!user){
        throw new Error("user not found")
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error("password didnt match try to write correct password")
    }
    const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_KEY)
    return{
        user,token
    }

}
module.exports={
    Signup,
    Login
}