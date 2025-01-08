/**
 * Truncate a sentence to be under the given characters limit and strip
 * out HTML tags from it.
 *
 * Optionally, you can force the truncate logic to complete words, which
 * may exceed the defined characters limit.
 */
export declare function excerpt(sentence: string, charactersLimit: number, options?: {
    completeWords?: boolean;
    suffix?: string;
}): string;
