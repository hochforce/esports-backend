import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio' },
    { id: 1, name: 'Anúncio' },
    { id: 1, name: 'Anúncio' },
    { id: 1, name: 'Anúncio' }
  ])
})

app.listen(3333)