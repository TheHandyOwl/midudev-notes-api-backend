const dbPassword = process.env.DBPASSWORD || 'PasswordIsEmpty'
const dbUser = process.env.DBUSER || 'UserIsEmpty'

module.exports = { dbUser, dbPassword }
