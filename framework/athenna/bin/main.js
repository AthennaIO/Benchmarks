import { Ignite } from '@athenna/core'
const ignite = await new Ignite().load(import.meta.url, {
  bootLogs: false,
  shutdownLogs: false,
})
await ignite.httpServer({
  port: 3000,
  host: 'localhost',
})
