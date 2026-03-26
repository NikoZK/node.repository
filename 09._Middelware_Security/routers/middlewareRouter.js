import { Router } from 'express'

const router = Router()

    function ipLogger(req, res, next) {
        console.log(req.ip)
        next()
    }

    router.use('/room', ipLogger)

    function butler(req, res, next) {
        console.log('Welcome to the mansion Mr. Wayne')
        next()
    }

    function takeCoat(req, res, next) {
        req.coatOff = true
        next()
    }

    router.get('/room', butler, takeCoat, (req, res, next) => {
        // res.send({ data: 'Welcome to room 1'})
        console.log('u r in room 1', req.coatOff)
        next()
    })


    // Inline middelware
    router.get('/room', (req, res, next) => {
        console.log("This is inline middleware")
        next()
    }, (req,res) => {
        res.send({ data: 'Welcome to room 2'})
    })


    router.get('/room', (req, res) => {
        res.send({ data: 'Welcome to room 2'})
    })

export default router