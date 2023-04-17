import fastify from 'fastify'

const server = fastify()

server.get('/', async (request, reply) => {
  return reply.status(200).send({ status: 'ok' })
})

await server.listen({
  port: 3003,
  host: 'localhost',
})
