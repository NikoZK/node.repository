    import express from 'express'
    import path from 'path'
    const app = express()

    app.use(express.json())
    app.use(express.static('public'))

    // ===================== Pages =====================

    app.get('/', (req, res) => {
        res.sendFile(path.resolve('public/pages/frontend/frontend.html'))
    })

    app.get('/about', (req, res) => {
        res.sendFile(path.resolve('public/pages/about/about.html'))
    })

    app.get('/contact', (req, res) => {
        res.sendFile(path.resolve('public/pages/frontend/contact.html'))
    })

    // ====================== API ======================
    import {getOrCreateSandboxContext, executeCodeInSandbox} from './util/replUtil.js'

    app.post('/api/repl', (req, res) => {
        if (!req.body) {
            return res.status(400).send({ errorMessage: 'Missing a JSON body'})
        }
        //let replCode = req.body?.replCode
        const {replCode, sandboxId } = req.body;

        if (!replCode) {
            return res.status(400).send({ errorMessage: 'Missing the key replCode in the JSON body' })
        }

        const sandbox = getOrCreateSandboxContext(sandboxId)
        const {error, success, output, result}  = executeCodeInSandbox(sandbox, replCode)
        
        if (error) {
            return res.status(500).send({
                data: {
                    error
                },
                errorMessage: 'Error executing the code in the provided code',
            })
        }

        res.send({ data: {success, output, result} })
    })

    const PORT = process.env.PORT || 8080

    const server = app.listen(PORT, (error) => {
        if (error) {
            console.log("Error starting the server")
        }
        console.log("Server is running on port", server.address().port, "The enviroment is:", process.env.NODE_ENV)
    })