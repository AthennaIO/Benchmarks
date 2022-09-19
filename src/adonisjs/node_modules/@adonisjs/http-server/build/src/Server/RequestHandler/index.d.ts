/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/// <reference path="../../../adonis-typings/index.d.ts" />
import { RouterContract } from '@ioc:Adonis/Core/Route';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { MiddlewareStoreContract } from '@ioc:Adonis/Core/Middleware';
/**
 * Handles the request by invoking it's middleware chain, along with the
 * route finalHandler
 */
export declare class RequestHandler {
    private middlewareStore;
    private router;
    private globalMiddleware;
    private handleRequest;
    constructor(middlewareStore: MiddlewareStoreContract, router: RouterContract);
    /**
     * Function to invoke global middleware
     */
    private executeMiddleware;
    /**
     * Finds the route for the request
     */
    private findRoute;
    /**
     * Handles the request and invokes required middleware/handlers
     */
    handle(ctx: HttpContextContract): Promise<void>;
    /**
     * Computing certain methods to optimize for runtime performance
     */
    commit(): void;
}
