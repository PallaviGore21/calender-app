const user = require("./../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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


