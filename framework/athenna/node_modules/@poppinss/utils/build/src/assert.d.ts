/**
 * @alias "assertExists"
 */
export declare function assert(value: unknown, message?: string): asserts value;
/**
 * Assert the value is turthy or raise an exception.
 *
 * Truthy value excludes, undefined, null, and false values.
 */
export declare function assertExists(value: unknown, message?: string): asserts value;
/**
 * Throws error when method is called
 */
export declare function assertUnreachable(x?: never): never;
/**
 * Assert the value is not null.
 */
export declare function assertNotNull<T>(value: T | null, message?: string): asserts value is Exclude<T, null>;
/**
 * Assert the value is not undefined.
 */
export declare function assertIsDefined<T>(value: T | undefined, message?: string): asserts value is Exclude<T, undefined>;
