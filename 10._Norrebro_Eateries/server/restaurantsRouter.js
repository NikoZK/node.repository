import { Router } from 'express'

const router = Router()

const restaurants = ["Sultan", "sheik", "Hero", "Poullet", "Symfoni", "Falafel House", "Kebabistan"]

router.get('/api/restaurants', (req, res) => {
    res.send({data: restaurants})
})


export default router