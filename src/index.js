/**
 * @athenna/benchmarks
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import autocannon from 'autocannon'

import { join } from 'node:path'
import { fork } from 'node:child_process'

import { Module } from '@secjs/utils'

const __dirname = Module.createDirname(import.meta.url)

function coolOff() {
  return new Promise(resolve => setTimeout(resolve, 2000))
}

function autocannonRun(opts) {
  return new Promise(resolve => {
    autocannon.track(autocannon(opts, resolve))
  })
}

async function athennaRun() {
  console.log('ATHENNA\n')
  const forked = fork(join(__dirname, 'athenna/bootstrap/main.js'))

  await coolOff()
  await autocannonRun({
    url: 'http://localhost:1335',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  await autocannonRun({
    url: 'http://localhost:1335',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  forked.kill('SIGINT')
  console.log('Done!\n')
}

async function fastifyRun() {
  console.log('FASTIFY\n')
  const forked = fork(join(__dirname, 'fastify/index.js'))

  await coolOff()
  await autocannonRun({
    url: 'http://localhost:3001',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  await autocannonRun({
    url: 'http://localhost:3001',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  forked.kill('SIGINT')
  console.log('Done!\n')
}

async function adonisJsRun() {
  console.log('ADONISJS\n')
  const forked = fork(join(__dirname, 'adonisjs/server.js'))

  await coolOff()
  await autocannonRun({
    url: 'http://localhost:3002',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  await autocannonRun({
    url: 'http://localhost:3002',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  forked.kill('SIGINT')
  console.log('Done!\n')
}

async function nestJsRun() {
  console.log('NESTJS\n')
  const forked = fork(join(__dirname, 'nestjs/main.js'))

  await coolOff()
  await autocannonRun({
    url: 'http://localhost:3003',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  await autocannonRun({
    url: 'http://localhost:3003',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  forked.kill('SIGINT')
  console.log('Done!\n')
}

async function expressRun() {
  console.log('EXPRESS\n')
  const forked = fork(join(__dirname, 'express/server.js'))

  await coolOff()
  await autocannonRun({
    url: 'http://localhost:3004',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  await autocannonRun({
    url: 'http://localhost:3004',
    connections: 100,
    duration: 40,
    pipelining: 10,
  })

  forked.kill('SIGINT')
  console.log('Done!\n')
}

await fastifyRun()
await coolOff()

await athennaRun()
await coolOff()

await adonisJsRun()
await coolOff()

await nestJsRun()
await coolOff()

await expressRun()
