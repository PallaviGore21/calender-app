const jwt = require("jsonwebtoken")
const user = require("../models/user")

exports.protected = async (req,res,next)=>{
    try {
        const token = req.headers.authorization
        if(!token){
            return res.status(401).json({
                success:true,
                message:"please provide token"
            })
        }
        const {id} =jwt.verify( token, process.env.JWT_KEY)
        // console.log(x);
        req.body.id= id
    
        next()
    } catch (error) {
       res.json({
        success:false,
        message:"error"+error
       })   
    }
  

}

exports.adminOnly = async (req,res,next)=>{
    try {
        const token = req.headers.authorization
        if(!token){
            return res.status(401).json({
                success:true,
                message:"please provide token"
            })
        }
        const {id} =jwt.verify( token, process.env.JWT_KEY)
        const result = await user.findById(id)
        if(!result.admin){
            return res.status(401).json({
                success:false,
                message:"Admin Only Route"
            })
        }
        // console.log(x);
        // req.body.id= id
    
        next()
    } catch (error) {
       res.json({
        success:false,
        message:"error"+error
       })   
    }
  

}