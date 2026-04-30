import db from './connection.js'

const stands = await db.stands.insertOne({ type: 'apple stand' })

console.log(stands)