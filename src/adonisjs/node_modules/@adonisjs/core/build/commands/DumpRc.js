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
const ace_1 = require("@adonisjs/ace");
/**
 * A command to display a list of routes
 */
class DumpRcFile extends ace_1.BaseCommand {
    /**
     * Log message
     */
    log(message) {
        if (this.application.environment === 'test') {
            this.logger.log(message);
        }
        else {
            console.log(message);
        }
    }
    async run() {
        this.log(JSON.stringify(this.application.rcFile, null, 2));
    }
}
exports.default = DumpRcFile;
DumpRcFile.commandName = 'dump:rcfile';
DumpRcFile.description = 'Dump contents of .adonisrc.json file along with defaults';
