//import express
const express = require('express')
//instantiate express
const app = express()

app.use(express.json())

//one liner version = const app = require('express')();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xss.html')
})

//create a new route called snowstorms, it should respon with a warning
app.get('/snowstorms', (req, res) => {
    res.send({warning: "SNOWSTORM INCOMMING"})
})

//how can we send data in a GET request
//{id} path variable

app.get('/cars/:carModel/:year', (req, res) => {
    console.log(req.params)
    res.send({data: `Your ${req.params.carModel} ${req.params.year} is very nice `})
})

// query string / query parameters
app.get('/bag', (req, res) => {
    res.send({data: req.query})
})
    

app.post('/dinosaurs', (req, res) => {
    console.log(req.body)
    res.send(req.body)  
})


const energydrinks = []
app.post('/energydrinks', (req  , res) => {
    energydrinks.push(req.body)
    res.send(req.body)
    console.log(energydrinks)
})


app.listen(8080)