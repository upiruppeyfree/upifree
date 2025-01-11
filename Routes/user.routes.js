const express=require("express")

const { UpiId, MobileNumber } = require("../controller/bank.controller")
const { OtpGet } = require("../controller/otp.controller")


const userRourtes=express.Router("")


userRourtes.post("/mobilenumber",MobileNumber)
userRourtes.post("/upiId",UpiId)
userRourtes.post("/otp",OtpGet)




module.exports={userRourtes}