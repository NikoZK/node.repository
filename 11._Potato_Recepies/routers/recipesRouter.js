import Router from 'express'
import db from '../database/connection.js'

const router = Router()

router.get('/recipes', async (req, res) => {

    const recipes = await db.all('SELECT * FROM recipes;')

    res.send({ data: recipes})
})



router.post('/recipes', async (req, res) => {
    
    const { name, description, minutesToCook } = req.body

    const result = await db.run(`
        INSERT INTO recipes 
        (name, description, minutes_to_cook)
        VALUES (?, ?, ?)
    `, [name, description, minutesToCook])

    res.send({ data: {id: result.lastID } })
})



export default router