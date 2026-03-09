import express from 'express'
import path from 'path' //path instead of __dirname

const app = express()
app.use(express.static("public"));

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

/*
            async function randomTimeGenerator() {
                const response = await fetch('/random-time')
                const data = await response.json()
            if (data.message) {
                randomTimeDisplay.innerText = data.message
            } else {
                randomTimeDisplay.innerText = "No do it in " + timeFormat(data.seconds)
            }
        }


        app.get('/random-time', (req, res) => {
            let yesOrTime = Math.random()
            if (yesOrTime > 0.5) {
                res.send({message: "Yes"})
            } else {
                let totalSeconds = Math.floor(Math.random() * (129600 - 1) + 1)
                res.send({seconds: totalSeconds})
            }
        })
*/

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", 8080)
})