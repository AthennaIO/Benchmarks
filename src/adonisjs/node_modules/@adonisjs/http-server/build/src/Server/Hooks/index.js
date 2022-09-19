"use strict";
/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hooks = void 0;
/**
 * Exposes to API to register and execute before and after hooks
 */
class Hooks {
    constructor() {
        /**
         * Registered before and after hooks
         */
        this.hooks = {
            before: [],
            after: [],
        };
    }
    /**
     * Register before hook
     */
    before(cb) {
        this.hooks.before.push(cb);
        return this;
    }
    /**
     * Register after hook
     */
    after(cb) {
        this.hooks.after.push(cb);
        return this;
    }
    /**
     * Executing before hooks in series. If this method returns `true`,
     * it means that one of the before hooks wants to end the request
     * without further processing it.
     */
    async executeBefore(ctx) {
        for (let hook of this.hooks.before) {
            await hook(ctx);
            /*
             * We must break the loop when one of the hooks set the response
             */
            if (ctx.response.hasLazyBody || !ctx.response.isPending) {
                return true;
            }
        }
        return false;
    }
    /**
     * Executes after hooks in series.
     */
    async executeAfter(ctx) {
        for (let hook of this.hooks.after) {
            await hook(ctx);
        }
    }
    /**
     * The commit action enables us to optimize the hook handlers
     * for runtime peformance
     */
    commit() {
        if (this.hooks.before.length === 0) {
            this.executeBefore = async () => false;
        }
        if (this.hooks.after.length === 0) {
            this.executeAfter = async () => { };
        }
    }
}
exports.Hooks = Hooks;
