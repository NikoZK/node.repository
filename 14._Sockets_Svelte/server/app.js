import express from 'express'
const app = express()

app.use(express.json())

import cors from 'cors'
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

import session from 'express-session'
import dotenv from 'dotenv'

dotenv.config()

const sessionMiddleware  = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false} 
})

app.use(sessionMiddleware)

import router from './routers/nicknamesRouter.js'
app.use(router)

import http from 'http'
const server = http.createServer(app)

import { Server } from 'socket.io'
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
})

io.engine.use(sessionMiddleware)

io.on("connection", (socket) => {
    console.log("A new socket connected with id", socket.id)

    socket.on("client-sends-color", (data) => {

        const session = socket.request.session

        session.reload((error) => {
            console.log(session)
            data.nickname = session.nickname
            io.emit("server-sends-color", data)

            session.save()
        })

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

