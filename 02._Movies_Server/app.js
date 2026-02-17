const express = require("express")
const app = express()

const movies = [
    { id: 1, title: 'Garlic is as good as ten mothers' },
    { id: 2, title: 'Minecraft the Movie' }
]

app.get("/movies",(req, res) => {
    res.send({ data: movies })
})

app.get("/movies/:id", (req, res) => {
    const providedMoviesId = Number(req.params.id) // params id skal være et number ikke string
    const foundMovie = movies.find((movie) => movie.id === providedMoviesId)

    if (!foundMovie) {
        res.status(404).send({ errorMessage: `No movie found by the id: ${req.params.id}` })
    } else {
    res.send(foundMovie)
    }

})

app.post("/")

/*
Status codes
2xx: Success
3xx: Redirect
4xx: client error
5xx: server side error
*/


app.listen(8080)