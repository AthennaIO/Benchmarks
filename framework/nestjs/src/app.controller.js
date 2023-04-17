'use strict'
const __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    const c = arguments.length
    let r =
      c < 3
        ? target
        : desc === null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc
    let d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (let i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
const __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.AppController = void 0
const common_1 = require('@nestjs/common')
let AppController = class AppController {
  async getHello() {
    return { status: 'ok' }
  }
}
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  AppController.prototype,
  'getHello',
  null,
)
AppController = __decorate([(0, common_1.Controller)()], AppController)
exports.AppController = AppController
// # sourceMappingURL=app.controller.js.map
