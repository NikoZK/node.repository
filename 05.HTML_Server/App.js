const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage.html')
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

console.log("App.js loaded");

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", 8080)
})