const user = require("./../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { sendEmail } = require("../utils/email")
const {addMinutes, isBefore} = require("date-fns")
const { findById } = require("./../models/user")
const {OAuth2Client} = require("../models/user")
exports.registerUserController = async (req,res)=>{
    try {
        console.log(req.body);
        const found = await user.findOne({
            email:req.body.email
        })
        console.log(found);
        if(found){
            return res.json({
                success:false,
                message:"email Already Exist"
            })
        }
       const hashPass = bcrypt.hashSync(req.body.password)
       const result = await user.create({
        ...req.body,
        password:hashPass,
        admin :false
       })
       const token = jwt.sign({id:result._id},process.env.JWT_KEY)
    //    sendEmail({
    //     sendTo:req.body.email,
    //     msg:"zzzzzzzzzzzzzzz",
    //     sub:"whatever"
    //    })
       res.json({
        success:true,
        message:"User Register Successfully",
        result:{
            id:result._id,
            firstName:result.firstName,
            email:result.email,
            active:result.active,
            admin:result.admin,
            

        }
       }) 
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Error'+error
        })
    }
}
exports.loginUserController = async(req,res)=>{
    try {
        const result = await user.findOne({
            email:req.body.email
        })
        console.log(req.body.email);
        if (!result){
            return res.status(401).json({
                success:false,
                message:"Invalid email"
            })

        }

        const match = await bcrypt.compare(req.body.password,result.password)

        if(!match){
            return res.status(401).json({
                message:"invalid password"
            })
        }
      await bcrypt.compare(req.body.password, result.password)

         const token = jwt.sign({id:result._id},process.env.JWT_KEY)

         res.json({
            success:true,
            message:"User Logged In Successfully",
            result:{
                id:result._id,
                name:result.name,
                email:result.email,
                active:result.active,
                admin:result.admin,
                token
            }
          
           }) 
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Error'+error
        })
    }
}

exports.forgetPasswordController = async (req,res)=>{
    try {
        const result = await user.findOne({email:req.body.email})
        if(!result){
            return res.status(400).json({
                success:false,
                message:"This email is not registered with us",
            })
        }
        await user.findByIdAndUpdate(result._id,{
            passwordResetAt:addMinutes(new Date(), 1),
            allowPasswordReset:true
        })
        sendEmail({
            sendTo:req.body.email,
            sub:"Instruction for Forget Password with SKILLHUB",
            msg:`http://localhost:5173/reset-password/${result._id}`
        })
        res.json({
            success:true,  
            message:"OK"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"error"+error
        })
    }
}

exports.resetPasswordController = async(req,res)=>{
    try {
        const {password} =req.body
        const {userId} =req.query
        const record = await user.findById(userId)
        if (!record){
            return res.status(400).json({
                message:"Invalid Link"
            })
        }
        if(isBefore(record.passwordResetAt, new Date())){
            return res.status(400).json({
                success:false,
                message:"Link Expired"
            })
         }
         if(!record.allowPasswordReset){
            return res.status(400).json({
                success:false,
                message:"you have used this link previously"
            })
         }
        const hashPass = bcrypt.hashSync(password)
        const result = await user.findByIdAndUpdate(userId,
            {
                password:hashPass,
                allowPasswordReset:false
            })

            if(!result){
                return res.status(401).json({
                    success:false,
                    message:"Something went wrong"
                })
            }
           
        // console.log(req.body);
        // console.log(req.query);
        res.json({
            success:true,
            message:"password reset successfully"
        })
       
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"error"+error

        })
    }
}
exports.destroyUsers = async (req,res)=>{
    try{
      await user.deleteMany()
      res.json({
        success:true,
        message:"all users deleted Successfully"
      })
    }catch{
         res.status(400).json({
            success:false,
            message:"error" + error
         })
    }
}


exports.loginWithGoogle = async(req,res)=>{
    try{
      const {tokenId} =req.body
      if(!tokenId){
       return res.status(401).json({
            masssage:"please provide token"
        })
      }
      const client = new OAuth2Client("62219674776-80j0uphg536c16qgrmq1eb4bbvfmj61b.apps.googleusercontent.com")
      const  {payload:{name,email,picture}} =await client.verifyIdToken({
        idToken:tokenId,
        audience:"62219674776-80j0uphg536c16qgrmq1eb4bbvfmj61b.apps.googleusercontent.com"
      })

      const result = await user.find({email})
      const token = jwt.sign({id:result._id},process.env.JWT_KEY)
      if(result){
        // old user
         res.json({
            message:"Login Success",
            result:{
                name,
                email,
                token
            }
         })
      }else{
        const result = await user.create({
            name:name,
            email:email
        })
        res.json({
            message:"user register successfully",
            result:{
                name,
                email,
                token
            }
        })
      }
    }catch(error){
        res.json({
            message:"error"+ error,
        })
    }
}