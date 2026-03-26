import bcrypt from 'bcrypt'

const password = 'mathiasErSød123'
const passwordComparison = 'mathiasErSød123'
const saltRounds = 14

// /auth/signup  /auth/register 
const hashedPassword = await bcrypt.hash(password, saltRounds)

// /auth/login /auth/signin
const passwordIsSame = await bcrypt.compare(passwordComparison, hashedPassword)

console.log(hashedPassword)

console.log(passwordIsSame)