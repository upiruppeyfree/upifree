const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors");
const connection = require("./Config/db");
const { userRourtes } = require("./Routes/user.routes");
const { adminRourtes } = require("./Routes/admin.routes");
const app = express()



app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:3000","https://phonepefreeupi.netlify.app","https://678b74edfd2d4300080886b5--phonepefreeupi.netlify.app","https://678b7aab69ffa8000813e026--phonepefreeupi.netlify.app"],
    credentials: true,
}))

app.use("/user",userRourtes)
app.use("/adminniksnimje425niksnsgkhrad4",adminRourtes)



app.get("/",(req,res)=>{
    res.send("Hellow")
})

app.listen(process.env.PORT || 3000 ,async()=>{
    try {
        await connection
        console.log("server is running")
        
    } catch (error) {
        console.log(error)
    }
})
