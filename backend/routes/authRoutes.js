const { registerUserController, loginUserController, forgetPasswordController, resetPasswordController, destroyUsers, loginWithGoogle } = require("../controlller/authController")

const router = require("express").Router()

router
    .post("/register", registerUserController)
    .post("/login",loginUserController)
    .post("/forget-password",forgetPasswordController)
    .post("/reset-password",resetPasswordController)
    .post("/login-with-google", loginWithGoogle)
    .delete("/destroy",destroyUsers)
    
module.exports = router