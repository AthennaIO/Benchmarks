import { JSONReplacer } from '../types.js';
/**
 * String Javascript values to a JSON string. Handles circular
 * references and bigints
 */
export declare function safeStringify(value: any, replacer?: JSONReplacer, space?: string | number): string | undefined;
