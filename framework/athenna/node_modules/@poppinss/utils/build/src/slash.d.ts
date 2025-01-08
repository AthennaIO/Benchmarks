/**
 * Copy-pasted from https://github.com/sindresorhus/slash/blob/main/index.d.ts
 * @credit - https://github.com/sindresorhus/slash
 */
/**
 * Convert Windows backslash paths to slash paths: `foo\\bar` ➔ `foo/bar`.
 * [Forward-slash paths can be used in Windows](http://superuser.com/a/176395/6877) as long as
 * they're not extended-length paths.
 *
 * @example
 * ```
 * import path from 'node:path';
 * import slash from 'slash';
 *
 * const string = path.join('foo', 'bar');
 * // Unix    => foo/bar
 * // Windows => foo\\bar
 *
 * slash(string);
 * // Unix    => foo/bar
 * // Windows => foo/bar
 * ```
 */
export declare function slash(path: string): string;
