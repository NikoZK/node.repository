import db from './connection.js'

const stands = await db.stands.find({ type: 'apple stand' }).toArray()

console.log(stands)