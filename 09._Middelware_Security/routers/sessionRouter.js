import { Router } from 'express'

const router = Router()

router.get('/dogpark/bark', (req, res) => {

    req.session.dogBarks = req.session.dogBarks ? req.session.dogBarks + 1 : 1

    res.send({ data: `A dogginton loudly barked ${req.session.dogBarks}` })
})

router.get('/dogpark/shutup', (req, res) => {
    const dogBarks = req.session.dogBarks
    console.log(req.session)
    req.session.dogBarks = 0

    res.send({ data: `No more loud dog barkingtons. Amount of dogs being silenced ${dogBarks}`})
})

export default router