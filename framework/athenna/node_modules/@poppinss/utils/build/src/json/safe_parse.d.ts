import { JSONReviver } from '../types.js';
/**
 * A drop-in replacement for JSON.parse with prototype poisoning protection.
 */
export declare function safeParse(jsonString: string, reviver?: JSONReviver): any;
