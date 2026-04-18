import 'dotenv/config'
import express from 'express'
import restaurantsRouter from './restaurantsRouter.js'
import visitorsRouter from './visitorsRouter.js'
import session from 'express-session'
import cors from 'cors'

const app = express()

app.use(express.static('../client/dist'))

app.use(cors({
    origin: true,
    credentials: true
}))

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(restaurantsRouter)
app.use(visitorsRouter)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", server.address().port, "The enviroment is:", process.env.NODE_ENV)
})