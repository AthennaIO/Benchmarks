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
const helpers_1 = require("@poppinss/utils/build/helpers");
/**
 * A command to generate a secure app key
 */
class GenerateKey extends ace_1.BaseCommand {
    async run() {
        const secret = helpers_1.string.generateRandom(32);
        console.log(this.colors.green(secret));
        console.log(this.colors.gray('  > During development, you may want to set the above secret as "APP_KEY" inside the .env file'));
    }
}
exports.default = GenerateKey;
GenerateKey.commandName = 'generate:key';
GenerateKey.description = 'Generate a new APP_KEY secret';
