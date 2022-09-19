/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/// <reference path="../../../adonis-typings/index.d.ts" />
import { RouteNode } from '@ioc:Adonis/Core/Route';
import { IocContract } from '@adonisjs/fold';
import { MiddlewareStoreContract } from '@ioc:Adonis/Core/Middleware';
/**
 * Precompiler is used to pre compiler the route handler and middleware. We
 * lookup the middleware and controllers upfront in the IoC container
 * and cache the lookup to boost the runtime performance.
 *
 * Also each route gets a `finalHandler` property, which is used to invoke the
 * route middleware and the route actual handler
 */
export declare class PreCompiler {
    private middlewareStore;
    /**
     * This function is used by reference to execute the route handler
     */
    private runRouteHandler;
    /**
     * Method to execute middleware using the middleware store
     */
    private executeMiddleware;
    /**
     * This function is used by reference to execute the route middleware + route handler
     */
    private runRouteMiddleware;
    /**
     * The resolver used to resolve the controllers from IoC container
     */
    private resolver;
    constructor(container: IocContract, middlewareStore: MiddlewareStoreContract);
    /**
     * Pre-compiling the handler to boost the runtime performance
     */
    private compileHandler;
    /**
     * Pre-compile the route middleware to boost runtime performance
     */
    private compileMiddleware;
    /**
     * Sets `finalHandler` property on the `route.meta`. This method
     * can be invoked to execute route middleware stack + route
     * controller/closure.
     */
    private setFinalHandler;
    /**
     * Pre-compile route handler and it's middleware to boost runtime performance. Since
     * most of this work is repetitive, we pre-compile and avoid doing it on every
     * request
     */
    compileRoute(route: RouteNode): void;
}
