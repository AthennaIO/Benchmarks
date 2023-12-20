import { Route } from '@athenna/http'
Route.get('/', ctx => {
  return ctx.response.status(200).send({ status: 'ok' })
})
