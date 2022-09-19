export interface IStripSlashesOptions {
    /**
     * Number of times to strip slashes. Equivalent to invoking the function
     * `count` times. Defaults to 1.
     */
    readonly count?: number;
    /**
     * The default value for all escape options (b, f, n, r, t, v, 0, x, u, and
     * uEs6). When true, escape options must be explicitly disabled. When false,
     * escape options must be explicitly enabled. Defaults to true.
     */
    readonly defaultEscapeValue?: boolean;
    /**
     * Unescape `"\\b"` to a backspace character.
     */
    readonly b?: boolean;
    /**
     * Unescape `"\\f"` to a form feed character.
     */
    readonly f?: boolean;
    /**
     * Unescape `"\\n"` to a newline (line feed) character.
     */
    readonly n?: boolean;
    /**
     * Unescape `"\\r"` to a carriage return character.
     */
    readonly r?: boolean;
    /**
     * Unescape `"\\t"` to a tag character.
     */
    readonly t?: boolean;
    /**
     * Unescape `"\\v"` to a vertical tab character.
     */
    readonly v?: boolean;
    /**
     * Unescape `"\\0"` to a null character.
     */
    readonly '0'?: boolean;
    /**
     * Unescape hex escape sequences (e.g. `"\\xa9"`).
     */
    readonly x?: boolean;
    /**
     * Unescape basic unicode escape sequences (e.g. `"\\u2020"`).
     */
    readonly u?: boolean;
    /**
     * Unescape ES6 unicode code point escape sequences (e.g. `"\\u{1F60a}"`).
     */
    readonly uEs6?: boolean;
}
/**
 * Remove one layer of slashes. All escape sequences will be transformed into
 * the character indicated by the sequence (e.g. `"\\n"` will become a
 * newline).
 *
 * @param str String to remove slashes from.
 * @param options Options for which escape sequences to recognize. Defaults to
 * recognizing all single character, hex, and unicode escape sequences
 */
export declare function stripSlashes(str: string, options?: IStripSlashesOptions): string;
/**
 * Remove one layer of slashes. All escape sequences will be transformed into
 * the character indicated by the sequence (e.g. `"\\n"` will become a
 * newline).
 *
 * @param str String to remove slashes from.
 * @param count Number of times to strip slashes. Equivalent to invoking the
 * function `count` times. Defaults to 1.
 */
export declare function stripSlashes(str: string, count?: number): string;
/**
 * @deprecated Use `stripSlashes()` instead.
 *
 * Maintains legacy behavior of _only_ recognizing newline (`"\n"`) and null
 * escape sequences (`"\0"`). Other slashes will not consume any trailing
 * characters (e.g. `"\\r"` becomes `"r"`, _not a carriage return_).
 */
export declare const strip: (str: string, count?: number | undefined) => string;
