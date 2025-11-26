const express = require('express')
const http = require('http')
const Server = require('socket.io').Server

const app = express()
const server = http.createServer(app)
const io = new Server(server, {

    cors:{
        origin: ""
    }
})
io.compress("connection", (socket) => {
    console.log("conected");

    socket.on("chat", chat => {
        io.emit("chat", chat)
    })

    socket.on("disconnect", () => {
        console.log("disconnected")
    } )

})

server.listen("3001", () => {
    console.log("running on 3001 port")
})