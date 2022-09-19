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
exports.Ace = void 0;
const App_1 = require("./App");
const GenerateManifest_1 = require("./GenerateManifest");
/**
 * Exposes the API to execute ace commands.
 */
class Ace {
    constructor(appRoot) {
        this.appRoot = appRoot;
    }
    /**
     * Handles the ace command
     */
    async handle(argv) {
        process.env.ADONIS_ACE_CWD = this.appRoot;
        if (argv[0] === 'generate:manifest' && !argv.includes('--help')) {
            await new GenerateManifest_1.GenerateManifest(this.appRoot).handle();
            return;
        }
        /**
         * Proxy over to application commands
         */
        await new App_1.App(this.appRoot).handle(argv);
    }
}
exports.Ace = Ace;
