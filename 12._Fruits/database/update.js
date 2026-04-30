import db from './connection.js'

const stands = await db.stands.updateOne({ type: 'apple stand' }, { $set: { price: 4 } })

console.log(stands)