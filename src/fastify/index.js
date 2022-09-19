import fastify from 'fastify'

const server = fastify()

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/', schema, function (req, reply) {
  reply.send({ hello: 'world' })
})

server.listen({ port: 3001, host: '127.0.0.1' })
