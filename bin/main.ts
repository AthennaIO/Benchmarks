/**
 * @athenna/benchmarks
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Benchmark from '#src/benchmark'

await Benchmark.adonisjs()
await Benchmark.athenna()
await Benchmark.express()
await Benchmark.fastify()
await Benchmark.nestjs()
