const express=require("express")
const { UserAllData } = require("../controller/user.controller")


const adminRourtes=express.Router("")

adminRourtes.get("/getalluserdata",UserAllData)


module.exports={adminRourtes}