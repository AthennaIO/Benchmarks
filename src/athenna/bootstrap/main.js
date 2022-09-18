import { resolve } from 'node:path'
import { Ignite } from '@athenna/core'
import { Module } from '@secjs/utils'
import { install } from 'source-map-support'

async function main() {
  install()

  process.env.CORE_TESTING = 'true'
  process.env.BOOT_LOGS = 'false'
  process.env.IS_ARTISAN = 'false'

  process.chdir(resolve(Module.createDirname(import.meta.url), '..'))

  const application = await new Ignite().fire()

  await application.bootHttpServer()
}

main().catch()
