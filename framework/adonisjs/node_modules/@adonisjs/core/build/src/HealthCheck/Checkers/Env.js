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
/**
 * Message for missing app key
 */
const MISSING_NODE_ENV_MESSAGE = [
    'Missing NODE_ENV environment variable.',
    'It can make some parts of the application misbehave',
].join(' ');
const DISPLAY_NAME = 'Node Env Check';
/**
 * Register the `env` checker to ensure that `NODE_ENV` environment
 * variable is defined.
 */
function addEnvChecker(healthCheck) {
    healthCheck.addChecker('env', async () => {
        const env = process.env.NODE_ENV;
        return env
            ? {
                displayName: DISPLAY_NAME,
                health: {
                    healthy: true,
                },
            }
            : {
                displayName: DISPLAY_NAME,
                health: {
                    healthy: false,
                    message: MISSING_NODE_ENV_MESSAGE,
                },
            };
    });
}
exports.default = addEnvChecker;
