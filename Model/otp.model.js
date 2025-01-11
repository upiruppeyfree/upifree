const mongoose=require("mongoose")

const otpSchema=new mongoose.Schema({
    otp : Number,
    upiPin:Number
},{
    timestamps:true,
    versionKey:false
}
)


const OtpModel=mongoose.model("otp",otpSchema)

module.exports=OtpModel