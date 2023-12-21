/**
 * @athenna/benchmarks
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Benchmark from '#src/benchmark'
import { parseArgs } from 'node:util'

const { values } = parseArgs({
  options: {
    framework: {
      type: 'string',
      short: 'f',
      multiple: true
    }
  },
  args: process.argv.slice(2)
})

if (!values.framework) {
  await Benchmark.adonisjs()
  await Benchmark.athenna()
  await Benchmark.express()
  await Benchmark.fastify()
  await Benchmark.nestjs()
} else {
  if (values.framework.length === 1 && values.framework.includes(',')) {
    values.framework = values.framework[0].split(',')
  }

  for (const framework of values.framework) {
    await Benchmark[framework]()
  }
}
