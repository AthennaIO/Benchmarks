/**
 * Justify the columns to have the same width by filling
 * the empty slots with a padding char.
 *
 * Optionally, the column can be aligned left or right.
 */
export declare function justify(columns: string[], options: {
    width: number;
    align?: 'left' | 'right';
    indent?: string;
    getLength?: (value: string) => number;
}): string[];
