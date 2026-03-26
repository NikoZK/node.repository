   import express from 'express'
   import middlewareRouter from './routers/middlewareRouter.js'
   import authRouter from './routers/authRouter.js'
   import helmet from 'helmet'
   import { rateLimit } from 'express-rate-limit'
   import session from 'express-session'
   import sessionRouter from './routers/sessionRouter.js'

   const app = express()

    app.use(middlewareRouter)
    app.use(helmet())

    app.use(session({
        secret: 'keyboard cat', // todo make sure to not push this
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }))

    app.use(sessionRouter)

    const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})
app.use(generalLimiter)

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 7,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
})

app.use('/auth', authLimiter)
app.use(authRouter)

    // /{*splat} is the new syntax in Express 5.x, before it was just /*
    app.get('/{*splat}', (req, res) => {
        res.send(`
            <div>
            <h1> 404 </h1>
            <h3> - ${req.path} - doesnt exist </h3>
            </div>
            `)
    })
    
    // too technical way to do make error pathing with json
    app.all('/{*splat}', (req, res) => {
        res.send({ errorMessage: `The route for ${req.path} and the http method ${req.method} does not exist`})
    })

    const PORT = process.env.PORT || 8080

    const server = app.listen(PORT, (error) => {
        if (error) {
            console.log("Error starting the server")
        }
        console.log("Server is running on port", server.address().port, "The enviroment is:", process.env.NODE_ENV)
    })