"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
process.env.HOST = '127.0.0.1'
process.env.PORT = '3002'
process.env.APP_KEY = 'S2_FA6tLofqdSP-KW11x8wMQOrAARBpO'
process.env.DRIVE_DISK = 'local'
process.env.NODE_ENV = 'production'
process.env.ENV_SILENT = 'true'
const source_map_support_1 = __importDefault(require("source-map-support"));
const standalone_1 = require("@adonisjs/core/build/standalone");
source_map_support_1.default.install({ handleUncaughtExceptions: false });
new standalone_1.Ignitor(__dirname)
    .httpServer()
    .start();
//# sourceMappingURL=server.js.map
