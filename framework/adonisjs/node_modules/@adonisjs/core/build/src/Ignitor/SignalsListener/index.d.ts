import { ApplicationContract } from '@ioc:Adonis/Core/Application';
/**
 * Exposes the API to invoke a callback when `SIGTERM` or
 * `SIGINT (pm2 only)` signals are received.
 */
export declare class SignalsListener {
    private application;
    protected onCloseCallback?: () => Promise<void>;
    /**
     * Invoke callback and exit process
     */
    private kill;
    constructor(application: ApplicationContract);
    /**
     * Listens for exit signals and invokes the given
     * callback
     */
    listen(callback: () => Promise<void>): void;
    /**
     * Cleanup event listeners
     */
    cleanup(): void;
}
