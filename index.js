const express = require('express')
const cors = require('cors')

const app = express()
const logger = require('./middlewares/loggerMiddleware')

app.use(cors())
app.use(express.json())

app.use(logger)

app.use((req, res, next) => {
  console.log('Middleware2')
  next()
})

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
    categories: ['sport', 'hobby']
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    res.json(note)
  } else {
    // res.status(404).send('<h1> Page not found </h1>');
    res.status(404).end()
  }
})

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.status(204).end()
})

app.post('/api/notes', (req, res) => {
  const note = req.body
  console.log(note)

  if (!note || !note.content) {
    return res.status(400).json({
      error: 'node.content is missing!'
    })
  }

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)
  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()
  }
  notes = [...notes, newNote]
  console.log(newNote)

  res.status(201).json(newNote)
})

app.use((req, res) => {
  console.log('Middleware 404')
  console.log(`Send to DB: ${req.path}`)
  res.status(404).json({
    error: 'Not found - 404'
  })
})

//const PORT = 3001
const PORT = Number(process.env.PORT) || 3002

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
