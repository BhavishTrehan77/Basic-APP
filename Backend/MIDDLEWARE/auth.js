const Auth=(req,resp,next)=>{
    try{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const token=req.headers.authorization.split(" ")[1]
        if(!token){
            throw new Error("token not found asap")
        }
        const decode=jwt.verify(token,process.env.JWT_KEY)
        req.user=decode
        next()
    }
    return resp.json({message:"not token match"})
    }catch(err){
        return resp.json({
            success:false,
            err:err.message
        })
    }
}
module.exports=Auth
