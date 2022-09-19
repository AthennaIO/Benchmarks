/**
 * Following values are considered as "true"
 */
export declare const BOOLEAN_POSITIVES: (string | number | boolean)[];
/**
 * Following values are considered as "false"
 */
export declare const BOOLEAN_NEGATIVES: (string | number | boolean)[];
/**
 * Ensures the value to exist
 */
export declare function ensureValue(key: string, value?: string, message?: string): asserts value is string;
