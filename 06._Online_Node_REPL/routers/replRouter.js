// import express from 'express'      instead of this use destructuring
// const router2 = express.Router()   Better to just get Router instead of whole library like below

import { Router } from 'express'
const router = Router()

router.get('/hello', (req, res) => {
    res.send({data: "Hello"})
})

    import {getOrCreateSandboxContext, executeCodeInSandbox} from '../util/replUtil.js'

    router.post('/api/repl', (req, res) => {
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

export default router