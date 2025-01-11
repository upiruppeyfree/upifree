const mongoose=require("mongoose")

const UpiSchema=new mongoose.Schema({
    upiId:String
},
{
    timestamps:true,
    versionKey:false
})

const UpiModel=mongoose.model("upi",UpiSchema)

module.exports={UpiModel}
