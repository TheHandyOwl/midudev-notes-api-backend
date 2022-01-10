const mongoose = require('mongoose')

const { dbName, dbPassword, dbUser } = require('./passwords')

const connectionStringDB = `mongodb+srv://${dbUser}:${dbPassword}@midudevfsb.fhvt9.mongodb.net/${dbName}?retryWrites=true&w=majority`

// Conexión a mongodb
mongoose
  .connect(connectionStringDB)
  .then(() => {
    console.log('DB connected')
  })
  .catch(err => {
    console.error(err)
  })

process.on('uncaughtException', () => {
  mongoose.connection.disconnect()
})
