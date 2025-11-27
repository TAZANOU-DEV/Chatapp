const express = require('express')
const http = require('http')
const Server = require('socket.io').Server
const cors = require("cors")

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",   // YOUR react URL
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("A user connected")

    socket.on("chat", (chat) => {
        io.emit("chat", chat)
    })

    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
})

server.listen(3001, () => {
    console.log("running on 3001 port")
})
