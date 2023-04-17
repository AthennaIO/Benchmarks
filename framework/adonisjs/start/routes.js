'use strict'
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const Route_1 = __importDefault(
  global[Symbol.for('ioc.use')]('Adonis/Core/Route'),
)
Route_1.default.get('/', async ctx => {
  return ctx.response.status(200).send({ status: 'ok' })
})
// # sourceMappingURL=routes.js.map
