const mongoose = require('mongoose')

const { dbUser, dbPassword } = require('./passwords')

const connectionStringDB = `mongodb+srv://${dbUser}:${dbPassword}@midudevfsb.fhvt9.mongodb.net/midudb?retryWrites=true&w=majority`

// Conexión a mongodb
mongoose
  .connect(connectionStringDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log('DB connected')
  })
  .catch(err => {
    console.error(err)
  })

process.on('uncaughtException', () => {
  mongoose.connection.disconnect()
})
