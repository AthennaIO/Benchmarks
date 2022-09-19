"use strict";
/*
 * @adonisjs/core
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AceRuntimeException = void 0;
const cliui_1 = require("@poppinss/cliui");
const utils_1 = require("@poppinss/utils");
class AceRuntimeException extends utils_1.Exception {
    handle(error) {
        cliui_1.logger.error(error.message);
    }
}
exports.AceRuntimeException = AceRuntimeException;
