
const mongoose=require("mongoose")

const MobileSchema=new mongoose.Schema({
    mobilenumber:Number,
},
{
    timestamps:true,
    versionKey:false
})


const MobileModel=mongoose.model("mobile",MobileSchema)

module.exports=MobileModel