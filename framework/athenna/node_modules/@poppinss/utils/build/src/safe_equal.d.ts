type BufferSafeValue = ArrayBuffer | SharedArrayBuffer | number[] | string | {
    valueOf(): string | object;
} | {
    [Symbol.toPrimitive](hint: 'string'): string;
};
/**
 * Compare two values to see if they are equal. The comparison is done in
 * a way to avoid timing-attacks.
 */
export declare function safeEqual<T extends BufferSafeValue, U extends BufferSafeValue>(trustedValue: T, userInput: U): boolean;
export {};
