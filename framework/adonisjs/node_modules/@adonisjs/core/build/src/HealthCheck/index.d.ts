import { ApplicationContract } from '@ioc:Adonis/Core/Application';
import { Checker, HealthReport, HealthCheckContract } from '@ioc:Adonis/Core/HealthCheck';
/**
 * The module exposes the API to find the health, liveliness and readiness of
 * the system. You can also add your own checkers.
 */
export declare class HealthCheck implements HealthCheckContract {
    private application;
    /**
     * A copy of registered checkers
     */
    private healthCheckers;
    /**
     * Reference to the IoC container to resolve health checkers
     */
    private resolver;
    /**
     * Returns an array of registered services names
     */
    get servicesList(): string[];
    constructor(application: ApplicationContract);
    /**
     * Invokes a given checker to collect the report metrics.
     */
    private invokeChecker;
    /**
     * A boolean to know, if all health checks have passed
     * or not.
     */
    isLive(): Promise<boolean>;
    /**
     * Add a custom checker to check a given service connectivity
     * with the server
     */
    addChecker(service: string, checker: Checker): void;
    /**
     * Ensure that application is ready. This relies on the application module.
     */
    isReady(): boolean;
    /**
     * Returns the health check reports. The health checks are performed when
     * this method is invoked.
     */
    getReport(): Promise<{
        healthy: boolean;
        report: HealthReport;
    }>;
}
