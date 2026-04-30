import db from './connection.js'

const stands = await db.stands.deleteOne({ type: 'apple stand' })

console.log(stands)

