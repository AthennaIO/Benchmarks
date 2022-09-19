export interface IAddSlashesOptions {
    /**
     * Number of times to add slashes. Equivalent to invoking the function
     * `count` times. Defaults to 1.
     */
    count?: number;
    /**
     * Characters to escape. Defaults to all single character escape sequence
     * characters (i.e. `\b`, `\f`, `\n`, `\r`, `\t`, `\v`, `\0`, `\'`, `\"`,
     * and `\\`).
     */
    characters?: string;
    /**
     * Use escape sequences (e.g. `"\xa9"` or `"\u2020"`) for non-ascii
     * characters (i.e. unicode code point 0x0080 and greater). Defaults to
     * false.
     *
     * _NOTE: Escaped code points over 2 bytes (Unicode supplementary planes),
     * are **always** encoded using two escape sequences as a surrogate pair
     * (e.g. `"\\ud83d\\ude0a"`), so that the output doesn't contain invalid
     * UTF-16 characters._
     */
    escapeNonAscii?: boolean;
}
/**
 * Escape all single character escapable sequences (i.e. `\b`, `\f`, `\n`,
 * `\r`, `\t`, `\v`, `\0`, `\'`, `\"`, and `\\`).
 *
 * @param str String in which to escape characters.
 * @param options Options for which characters to add slashes to, how many
 * slashes to add, and whether to use escape sequences for non-ascii
 * characters.
 */
export declare function addSlashes(str: string, options?: IAddSlashesOptions): string;
/**
 * Escape all single character escapable sequences (i.e. `\b`, `\f`, `\n`,
 * `\r`, `\t`, `\v`, `\0`, `\'`, `\"`, and `\\`).
 *
 * _NOTE: Escaped code points over 2 bytes (Unicode supplementary planes),
 * are **always** encoded using two escape sequences as a surrogate pair
 * (e.g. `"\\ud83d\\ude0a"`), so that the output doesn't contain invalid
 * UTF-16 characters._
 *
 * @param str String in which to escape characters.
 * @param characters Characters to escape. Defaults to all single character
 * escape sequence characters (i.e. `\b`, `\f`, `\n`, `\r`, `\t`, `\v`, `\0`,
 * `\'`, `\"`, and `\\`).
 */
export declare function addSlashes(str: string, characters?: string): string;
/**
 * Escape specific characters.
 *
 * _NOTE: Escaped code points over 2 bytes (Unicode supplementary planes),
 * are **always** encoded using two escape sequences as a surrogate pair
 * (e.g. `"\\ud83d\\ude0a"`), so that the output doesn't contain invalid
 * UTF-16 characters._
 *
 * @param str String to add slashes to.
 * @param count Number of times to add slashes. Equivalent to invoking the
 * function `count` times. Defaults to 1.
 * @param characters Characters to escape. Defaults to all single character
 * escape sequence characters (i.e. `\b`, `\f`, `\n`, `\r`, `\t`, `\v`, `\0`,
 * `\'`, `\"`, and `\\`).
 */
export declare function addSlashes(str: string, count?: number, characters?: string): string;
/**
 * @deprecated Use `addSlashes()` instead.
 *
 * Maintains the legacy behavior of only adding slashes to newlines (`"\n"`),
 * carriage returns (`"\r"`), nulls (`"\0"`), single quotes (`"'"`), double
 * quotes (`"\""`), and backslashes (`"\\"`).
 */
export declare const add: (str: string, count?: number | undefined) => string;
