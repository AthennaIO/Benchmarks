/**
 * String builder to transform the string using the fluent API
 */
export default class StringBuilder {
    #private;
    constructor(value: string | StringBuilder);
    /**
     * Applies dash case transformation
     */
    dashCase(): this;
    /**
     * Applies dot case transformation
     */
    dotCase(): this;
    /**
     * Applies snake case transformation
     */
    snakeCase(): this;
    /**
     * Applies pascal case transformation
     */
    pascalCase(): this;
    /**
     * Applies camelcase case transformation
     */
    camelCase(): this;
    /**
     * Applies capital case transformation
     */
    capitalCase(): this;
    /**
     * Applies title case transformation
     */
    titleCase(): this;
    /**
     * Applies sentence case transformation
     */
    sentenceCase(): this;
    /**
     * Removes all sorts of casing from the string
     */
    noCase(): this;
    /**
     * Converts value to its plural form
     */
    plural(): this;
    /**
     * Converts value to its singular form
     */
    singular(): this;
    /**
     * Converts value to a URL friendly slug
     */
    slugify(): this;
    /**
     * Removes a given suffix from the string
     */
    removeSuffix(suffix: string): this;
    /**
     * Adds suffix to the string
     */
    suffix(suffix: string): this;
    /**
     * Removes a given prefix from the string
     */
    removePrefix(prefix: string): this;
    /**
     * Adds prefix to the string
     */
    prefix(prefix: string): this;
    /**
     * Removes extension from the value
     */
    removeExtension(): this;
    /**
     * Adds extension to the value
     */
    ext(extension: string): this;
    toString(): string;
}
