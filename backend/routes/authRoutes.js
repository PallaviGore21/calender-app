const { registerUserController, loginUserController, forgetPasswordController, resetPasswordController, destroyUsers, loginWithGoogle } = require("../controlller/authController")

const router = require("express").Router()

router
    .post("/register", registerUserController)
    .post("/login",loginUserController)
    .delete("/destroy",destroyUsers)
    
module.exports = router