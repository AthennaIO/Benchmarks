/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/// <reference path="../../../adonis-typings/index.d.ts" />
import { HookHandler, HooksContract } from '@ioc:Adonis/Core/Server';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
/**
 * Exposes to API to register and execute before and after hooks
 */
export declare class Hooks implements HooksContract {
    /**
     * Registered before and after hooks
     */
    private hooks;
    /**
     * Register before hook
     */
    before(cb: HookHandler): this;
    /**
     * Register after hook
     */
    after(cb: HookHandler): this;
    /**
     * Executing before hooks in series. If this method returns `true`,
     * it means that one of the before hooks wants to end the request
     * without further processing it.
     */
    executeBefore(ctx: HttpContextContract): Promise<boolean>;
    /**
     * Executes after hooks in series.
     */
    executeAfter(ctx: HttpContextContract): Promise<void>;
    /**
     * The commit action enables us to optimize the hook handlers
     * for runtime peformance
     */
    commit(): void;
}
