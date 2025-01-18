const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors");
const connection = require("./Config/db");
const { userRourtes } = require("./Routes/user.routes");
const { adminRourtes } = require("./Routes/admin.routes");
const { Server } = require('socket.io');
const http = require('http');

const app = express()

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"], // Update with your frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  },
});


app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:3000","https://phonepefreeupi.netlify.app","https://678b74edfd2d4300080886b5--phonepefreeupi.netlify.app"],
    credentials: true,
}))

app.use("/user",userRourtes)
app.use("/adminniksnimje425niksnsgkhrad4",adminRourtes)


io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  
    // Listen for new user data
    socket.on('newUserData', (data) => {
      console.log('New user data received:', data);
      // Broadcast updated data to all connected clients
      io.emit('updateUserData', data);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

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
