const dotenv=require("dotenv")
const { UpiModel } = require("../Model/upi.model")
const MobileModel = require("../Model/mobile.model")
dotenv.config()


const MobileNumber=async(req,res)=>{
    const {mobilenumber}=req.body
    console.log(mobilenumber)
    if(!mobilenumber ){
        return res.status(400).send({message:"Please Fill Your Mobile Number "})   
    }

    const isExistUser = await MobileModel.findOne({ mobilenumber });
    if (isExistUser) {
        return res.status(400).send({ message: "Mobile Number already exists. Please enter a new number." });
    }

    try {
        await MobileModel.create({mobilenumber})
        res.status(201).send({message:"Mobile Number Add  Successfully"})
    }
    catch(error){
        console.log(error)
    }
}

const UpiId=async(req,res)=>{
    const {upiId}=req.body


    if(!upiId ){
        return res.status(400).send({message:"Please Fill Ypur Upi ID "})   
    }

    const isExistuser=await UpiModel.findOne({upiId})
    if(isExistuser){
        return res.status(400).send({message:"UPI Account is already exist Please Enter New Account"})
    }


    try {
        await UpiModel.create({upiId})
        res.status(201).send({message:"Upi Id Add Successfully"})
    }
    catch(error){
        console.log(error)
    }

}



module.exports={UpiId,MobileNumber}