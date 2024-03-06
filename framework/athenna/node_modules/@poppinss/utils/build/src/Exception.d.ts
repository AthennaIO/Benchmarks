/**
 * Extended Error object with the option to set error `status` and `code`.
 * At AdonisJs, we prefer exceptions with proper error codes to handle
 * them without relying on message pattern matching.
 *
 * ```js
 * new Exception('message', 500, 'E_RUNTIME_EXCEPTION')
 * ```
 */
export declare class Exception extends Error {
    /**
     * Static properties to defined on the exception once
     * and then re-use them
     */
    static help?: string;
    static code?: string;
    static status?: number;
    static message?: string;
    /**
     * Name of the class that raised the exception.
     */
    name: string;
    /**
     * Optional help description for the error. You can use it to define additional
     * human readable information for the error.
     */
    help?: string;
    /**
     * A machine readable error code. This will allow the error handling logic
     * to narrow down exceptions based upon the error code.
     */
    code?: string;
    /**
     * A status code for the error. Usually helpful when converting errors
     * to HTTP responses.
     */
    status: number;
    constructor(message?: string, options?: ErrorOptions & {
        code?: string;
        status?: number;
    });
    get [Symbol.toStringTag](): string;
    toString(): string;
}
/**
 * Helper to create anonymous error classes
 */
export declare function createError<T extends any[] = never>(message: string, code: string, status?: number): typeof Exception & T extends never ? {
    new (args?: any, options?: ErrorOptions): Exception;
} : {
    new (args: T, options?: ErrorOptions): Exception;
};
