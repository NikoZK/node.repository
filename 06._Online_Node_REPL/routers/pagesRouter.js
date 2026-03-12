import { Router } from 'express'
import { frontpagePage, aboutPage, contactPage } from '../util/pagesUtil.js'

const router = Router()

    router.get('/', (req, res) => {
    res.send(frontpagePage)
       // res.sendFile(path.resolve('public/pages/frontend/frontend.html'))
    })

    
    router.get('/about', (req, res) => {
        res.send(aboutPage)
     //   res.sendFile(path.resolve('public/pages/about/about.html'))
    })

    router.get('/contact', (req, res) => {
        res.send(contactPage)
    })

    export default router