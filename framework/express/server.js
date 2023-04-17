import express from 'express'

const server = express()

server.get('/', async (request, response) => {
  return response.status(200).send({ status: 'ok' })
})

await server.listen(3004)
