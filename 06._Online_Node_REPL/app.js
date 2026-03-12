    import express from 'express'
    import path from 'path'
    const app = express()

    app.use(express.json())
    app.use(express.static('public'))

    // ===================== Pages =====================
    import pagesRouter from './routers/pagesRouter.js'

    app.use(pagesRouter)

    // ====================== API ======================
    import replRouter from './routers/replRouter.js'

    app.use(replRouter)




    // short-circuit syntax
    const PORT = process.env.PORT || 8080

    const server = app.listen(PORT, (error) => {
        if (error) {
            console.log("Error starting the server")
        }
        console.log("Server is running on port", server.address().port, "The enviroment is:", process.env.NODE_ENV)
    })