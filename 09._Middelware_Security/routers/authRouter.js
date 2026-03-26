import { Router } from 'express'

const router = Router()

/*
Authentication and Authorization

Authentication: Knowing that the user is who they say they are 
Authorization: Knowing if the user har privilegrs to access the resources
*/

function isAdmin(req, res, next) {
    // this simulates getting the value from database
    // and compare tokens or sessions
    const isAdmin = true
    if (isAdmin) {
        req.user = {
            isAdmin, 
            username: 'Bob'
        }
        return next()
    }
    res.status(403).send({ errorMessage: 'YOU AINT NO GODDAMN ADMIN BOY'})
}

router.get('/auth/admin', (req, res) => {
    console.log(req.user)
    res.send({ data: 'U are an admin, u can see this: 10 active users'})
})

export default router