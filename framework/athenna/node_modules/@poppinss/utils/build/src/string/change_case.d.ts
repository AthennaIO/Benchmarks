/**
 * The method is a copy/paste from the "title-case" package. They have
 * a dependency on "tslib", which I don't want.
 */
export declare function titleCase(input: string): string;
/**
 * Convert string to camelcase
 */
export declare function camelCase(value: string): string;
/**
 * Convert string to snakecase
 */
export declare function snakeCase(value: string): string;
/**
 * Convert string to dashcase
 */
export declare function dashCase(value: string, options?: {
    capitalize?: boolean;
}): string;
/**
 * Convert string to pascal case
 */
export declare function pascalCase(value: string): string;
/**
 * Convert string to capital case
 */
export declare function capitalCase(value: string): string;
/**
 * Convert string to sentence case
 */
export declare function sentenceCase(value: string): string;
/**
 * Convert string to dot case
 */
export declare function dotCase(value: string, options?: {
    lowerCase?: boolean;
}): string;
/**
 * Remove all sort of casing from the string. Copy-pasted from
 * "no-case" package with slight modifications.
 */
export declare function noCase(value: string, transform?: (part: string, index: number, parts: string[]) => string): string;
