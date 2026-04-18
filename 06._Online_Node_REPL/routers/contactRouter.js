import { Router } from 'express'

const contactRouter = Router()

contactRouter.post('/api/contact', (req, res) => {
    res.send({ data: req.body })
})

export default contactRouter