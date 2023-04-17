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
Object.defineProperty(exports, '__esModule', { value: true })
exports.AppModule = void 0
const common_1 = require('@nestjs/common')
const app_controller_1 = require('./app.controller')
let AppModule = class AppModule {}
AppModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [],
      controllers: [app_controller_1.AppController],
      providers: [],
    }),
  ],
  AppModule,
)
exports.AppModule = AppModule
// # sourceMappingURL=app.module.js.map
