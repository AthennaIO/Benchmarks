/**
 * Truncate a sentence to be under the given characters limit.
 *
 * Optionally, you can force the truncate logic to complete words, which
 * may exceed the defined characters limit.
 */
export declare function truncate(sentence: string, charactersLimit: number, options?: {
    completeWords?: boolean;
    suffix?: string;
}): string;
