/**
 * Recursively flatten an object/array.
 */
export declare function flatten<X = Record<string, any>, Y = unknown>(input: Y, glue?: string, keepNullish?: boolean): X;
