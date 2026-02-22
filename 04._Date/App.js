const express = require('express')

const app = express()
app.use(express.json())

//console.log(new Date()) // UTC date + time
//console.log(Date())// Local time
//console.log(Date.now())// Maskine tid - UNIX epoch time(Miliseconds since january 1st 1970)

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const days = ["Sunday","Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"]

//Task create a route that returns todays month
app.get("/month/v1", (req, res) => {
    const currentMonth = new Date().getMonth()
    res.send({ data: months[currentMonth] })
})


app.get("/month/v2", (req, res) => {
    const currentMonth = new Date().toLocaleString('default', {month: 'long'} )
    console.log(currentMonth)
    res.send({ data: currentMonth})
})

//Task create route that returns day

app.get("/day/v1", (req, res) => {
    const currentDay = new Date().getDay()
   res.send({ data: days[currentDay]})
})

app.get("/day/v2", (req, res) => {
    const currentDay = new Date().toLocaleString('default', {weekday: 'long'} )
    console.log(currentDay)
    res.send({ data: currentDay})
})

/*
falsy values:
false, null, undefined, NaN, "", ``, '',
*/
app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", 8080)
})