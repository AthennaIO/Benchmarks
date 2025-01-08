import { ReadAllFilesOptions } from './types.js';
/**
 * Returns an array of file paths from the given location. You can
 * optionally filter and sort files by passing relevant options
 *
 * ```ts
 * await fsReadAll(new URL('./', import.meta.url))
 *
 * await fsReadAll(new URL('./', import.meta.url), {
 *   filter: (filePath) => filePath.endsWith('.js')
 * })

 * await fsReadAll(new URL('./', import.meta.url), {
 *   absolute: true,
 *   unixPaths: true
 * })
* ```
 */
export declare function fsReadAll(location: string | URL, options?: ReadAllFilesOptions): Promise<string[]>;
