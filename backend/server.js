const express = require("express")
const { connect } = require("./config/db")
require("dotenv").config({path:"./.env"})
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
connect()
app.use("/user", require("./routes/userRoute"))
app.use("/auth", require("./routes/authRoutes"))
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server Running`))