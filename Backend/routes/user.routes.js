const express=require('express')
const { signup, login, dashboardController } = require('../controllers/user.controller')
const Auth = require('../MIDDLEWARE/auth')
const router=express.Router()




router.post("/signup",signup)
router.post("/login",login)
router.get("/dashboard",Auth,dashboardController)



module.exports=router