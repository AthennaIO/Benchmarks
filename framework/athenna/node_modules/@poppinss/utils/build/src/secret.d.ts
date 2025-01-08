/**
 * Define a Secret value that hides itself from the logs or the console
 * statements.
 *
 * The idea is to prevent accidental leaking of sensitive information.
 * Idea borrowed from.
 * https://transcend.io/blog/keep-sensitive-values-out-of-your-logs-with-types
 */
export declare class Secret<T> {
    #private;
    constructor(value: T, redactedKeyword?: string);
    toJSON(): string;
    valueOf(): string;
    toLocaleString(): string;
    toString(): string;
    /**
     * Returns the original value
     */
    release(): T;
    /**
     * Transform the original value and create a new
     * secret from it.
     */
    map<R>(transformFunc: (value: T) => R): Secret<R>;
}
