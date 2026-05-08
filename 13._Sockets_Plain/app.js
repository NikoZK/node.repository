import express from 'express'
const app = express()

app.use(express.static('public'))

import http from 'http'
const server = http.createServer(app)

import { Server } from 'socket.io'
const io = new Server(server)

io.on("connection", (socket) => {
    console.log("A new socket connected with id", socket.id)

    socket.on("client-sends-color", (data) => {
        console.log(data)

        //Emits to ALL sockets including itself
        io.emit("server-sends-color", data)

        //Emits to itself
       //socket.emit("server-sends-color", data)
        
        //Emits and broadcasts to all other sockets besides itself
       //socket.broadcast.emit("server-sends-color", data)
    })


    socket.on("disconnect", () => {
        console.log("bye bye socket id:", socket.id)
    })
})

const PORT = process.env.PORT ?? 8080

server.listen(PORT, () => console.log("da survur is runnin on prot", PORT))

