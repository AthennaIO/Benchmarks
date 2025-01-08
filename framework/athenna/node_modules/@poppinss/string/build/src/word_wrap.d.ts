/**
 * Wraps a string value to be on multiple lines after
 * a certain characters limit has been hit.
 */
export declare function wordWrap(value: string, options: {
    width: number;
    indent?: string;
    newLine?: string;
    escape?: (value: string) => string;
}): string;
