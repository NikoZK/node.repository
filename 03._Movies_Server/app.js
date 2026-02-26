const express = require("express")
const app = express()
app.use(express.json())

const movies = [
    { id: 1, title: 'Garlic is as good as ten mothers' },
    { id: 2, title: 'Minecraft the Movie' }
]
let nextId = 3


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

app.post("/movies", (req, res) => {

    const newMovie = {
        id: nextId++,
        title: req.body.title
    }

    movies.push(newMovie)

    res.status(201).send(newMovie)
})


app.post("/movies", (req, res) => {
    if (!req.body) {
        return res.status(400).send({errorMessage: "No JSON body provided"})
    }
    const providedMovie = req.body

    providedMovie.id = nextId++

    movies.push(providedMovie)

    res.send({ data: providedMovie })
})

//let number = 2
// Post-fix notation 2,3
//console.log(number++)
//console.log(number)
// Pre-fix notation 3, 3
//console.log(++number)
//console.log(number)


//app.put("/")


app.patch("/movies/:id", (req, res) => {
        const providedMoviesId = Number(req.params.id)
        const foundMovieIndex = movies.findIndex((movie) => movie.id === providedMoviesId)
        
        if(foundMovieIndex === -1) {
            res.setMaxListeners(404).send({ errorMessage: `No movie found by id: ${req.params.id}`})
        }
        
        const foundMovie = movies[foundMovieIndex]
        const providedMovie = req.body

        foundMovie.title = req.body

        const movieToCreate = {...foundMovie, ...providedMovie}
        movies[foundMovieIndex] = movieToCreate

        res.send({ data: movieToCreate})
})


app.delete("/movies/:id", (req, res) => {
    const providedMoviesId = Number(req.params.id)
    const foundMovieIndex = movies.findIndex((movie) => movie.id === providedMoviesId)

    if (foundMovieIndex === -1) {
        res.status(404).send({errorMessage: `No movie found by the id: ${req.params.id}`})
    return }

        movies.splice(foundMovieIndex, 1)

        res.send()
    }
)


/*
Status codes
2xx: Success
3xx: Redirect
4xx: client error
5xx: server side error
*/


app.listen(8080)