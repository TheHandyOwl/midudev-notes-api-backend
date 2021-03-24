module.exports = (error, req, res, next) => {
  console.error(error)
  console.log(error.name)
  switch (error.name) {
    case 'CastError':
      res.status(400).send({ error: 'id used is malformed' })
      break
    default:
      res.status(500).end()
      break
  }
}
