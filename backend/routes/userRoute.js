const { getAllUsers, destroyAllusers } = require("../controlller/userController")
const {protected, adminOnly} = require("../middlewares/authmiddleware")

const router = require("express").Router()

router
.get("/", getAllUsers)
.delete("/destroy", destroyAllusers)

module.exports = router