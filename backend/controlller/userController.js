const user = require("./../models/user")

exports.getAllUsers = async(req,res)=>{
    try {
        // const u = await user.findById(req.body.id)
        // if(!u.admin){
        //     return res.status(401).json({
        //         success:false,
        //         message:"who are"
        //     })
        // } 
        const result = await user.find()//.select("name","email_id",) // jevdh pahije  tevdhch lihaych name, email, tevdhch pathvel 
        res.json({
            success:true,
            message:"user fetched successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Error'+error
        })
    }
}


exports.destroyAllusers = async(req,res)=>{

    await user.deleteMany()

    res.json({
       message:"All users deleted Success",
       
    })
}
exports.getuserDetails = async(req,res)=>{
    try {
        const result = await user.findById(req.body.id)//.select("name","email_id",) // jevdh pahije  tevdhch lihaych name, email, tevdhch pathvel 
        res.json({
            success:true,
            message:"user profile fetch successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Error'+error
        })
    }
}