/**
 * @athenna/benchmarks
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Logger from '#src/logger'
import Cannon from '#src/cannon'

import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { fork } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default class Benchmark {
  public static async athenna() {
    Logger.title(' ATHENNA ')
    const forked = fork(join(__dirname, '../framework/athenna/bin/main.js'))

    await Logger.spinner(Cannon.coolOff, 'BOOTING ATHENNA APP')

    Logger.line()
    Logger.title(' ATHENNA RUN 1 ')
    await Cannon.run('http://localhost:3000')

    Logger.line()
    await Logger.spinner(Cannon.coolOff, 'COOLING OFF')

    Logger.line()
    Logger.title(' ATHENNA RUN 2 ')
    await Cannon.run('http://localhost:3000')

    forked.kill('SIGINT')
    Logger.title('\n ATHENNA DONE! \n')

    await Cannon.coolOff()
  }

  public static async adonisjs() {
    Logger.title(' ADONISJS ')
    const forked = fork(join(__dirname, '../framework/adonisjs/server.js'))

    await Logger.spinner(Cannon.coolOff, 'BOOTING ADONISJS APP')

    Logger.line()
    Logger.title(' ADONISJS RUN 1 ')
    await Cannon.run('http://localhost:3001')

    Logger.line()
    await Logger.spinner(Cannon.coolOff, 'COOLING OFF')

    Logger.line()
    Logger.title(' ADONISJS RUN 2 ')
    await Cannon.run('http://localhost:3001')

    forked.kill('SIGINT')
    Logger.title('\n ADONISJS DONE! \n')

    await Cannon.coolOff()
  }

  public static async nestjs() {
    Logger.title(' NESTJS ')
    const forked = fork(join(__dirname, '../framework/nestjs/src/main.js'))

    await Logger.spinner(Cannon.coolOff, 'BOOTING NESTJS APP')

    Logger.line()
    Logger.title(' NESTJS RUN 1 ')
    await Cannon.run('http://localhost:3002')

    Logger.line()
    await Logger.spinner(Cannon.coolOff, 'COOLING OFF')

    Logger.line()
    Logger.title(' NESTJS RUN 2 ')
    await Cannon.run('http://localhost:3002')

    forked.kill('SIGINT')
    Logger.title('\n NESTJS DONE! \n')

    await Cannon.coolOff()
  }

  public static async fastify() {
    Logger.title(' FASTIFY ')
    const forked = fork(join(__dirname, '../framework/fastify/server.js'))

    await Logger.spinner(Cannon.coolOff, 'BOOTING FASTIFY APP')

    Logger.line()
    Logger.title(' FASTIFY RUN 1 ')
    await Cannon.run('http://localhost:3003')

    Logger.line()
    await Logger.spinner(Cannon.coolOff, 'COOLING OFF')

    Logger.line()
    Logger.title(' FASTIFY RUN 2 ')
    await Cannon.run('http://localhost:3003')

    forked.kill('SIGINT')
    Logger.title('\n FASTIFY DONE! \n')

    await Cannon.coolOff()
  }

  public static async express() {
    Logger.title(' EXPRESS ')
    const forked = fork(join(__dirname, '../framework/express/server.js'))

    await Logger.spinner(Cannon.coolOff, 'BOOTING EXPRESS APP')

    Logger.line()
    Logger.title(' EXPRESS RUN 1 ')
    await Cannon.run('http://localhost:3004')

    Logger.line()
    await Logger.spinner(Cannon.coolOff, 'COOLING OFF')

    Logger.line()
    Logger.title(' EXPRESS RUN 2 ')
    await Cannon.run('http://localhost:3004')

    forked.kill('SIGINT')
    Logger.title('\n EXPRESS DONE! \n')

    await Cannon.coolOff()
  }
}
