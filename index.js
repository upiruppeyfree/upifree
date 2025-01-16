const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connection = require("./Config/db");
const { userRourtes } = require("./Routes/user.routes");
const { adminRourtes } = require("./Routes/admin.routes");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:3000"],
        credentials: true,
    },
});

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
}));

// Attach io instance to the app
app.set("io", io);

app.use("/user", userRourtes);
app.use("/adminniksnimje425niksnsgkhrad4", adminRourtes);

app.get("/", (req, res) => {
    res.send("Hello");
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start the server
server.listen(process.env.PORT || 3000, async () => {
    try {
        await connection;
        console.log("Server is running");
    } catch (error) {
        console.error(error);
    }
});
