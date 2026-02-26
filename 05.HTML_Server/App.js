import express from 'express'
import path from 'path' //path instead of __dirname

const app = express()

app.use(express.static("public"));

import { esModuleCookieFactory } from './util/esModuleCookiesUtil.js'
console.log(esModuleCookieFactory())

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
})

app.get('/cookieFactory', (req, res) => {
    res.sendFile(path.resolve('public/cookieFactory/cookieFactory.html'))
})

app.get('/redirection', (req, res) => {
    res.sendFile(path.resolve('public/redirection/redirection.html'))
})


app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", 8080)
})