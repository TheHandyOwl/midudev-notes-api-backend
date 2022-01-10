require('dotenv').config()

const dbName = process.env.DBNAME || 'DBIsEmpty'
const dbPassword = process.env.DBPASSWORD || 'PasswordIsEmpty'
const dbUser = process.env.DBUSER || 'UserIsEmpty'

module.exports = { dbName, dbPassword, dbUser }
