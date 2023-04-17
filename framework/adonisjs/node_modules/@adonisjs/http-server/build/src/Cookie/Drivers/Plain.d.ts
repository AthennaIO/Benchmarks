/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/**
 * Encodes a value into a base64 url encoded string to
 * be set as cookie
 */
export declare function pack(value: any): null | string;
/**
 * Returns true when this `unpack` method of this module can attempt
 * to unpack the encode value.
 */
export declare function canUnpack(encodedValue: string): boolean;
/**
 * Attempts to unpack the value by decoding it. Make sure to call, `canUnpack`
 * before calling this method
 */
export declare function unpack(encodedValue: string): null | any;
