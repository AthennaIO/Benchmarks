import { Ignite } from '@athenna/core'
import { Config } from '@athenna/config'
const ignite = await new Ignite().load(import.meta.url, {
  beforePath: '/',
  bootLogs: false,
  shutdownLogs: false,
})
Config.set('http', {
  port: 3000,
  host: 'localhost',
  cors: { enabled: false },
  logger: { enabled: false },
  rTracer: { enabled: false },
  swagger: { enabled: false },
  rateLimit: { enabled: false },
})
await ignite.httpServer()
