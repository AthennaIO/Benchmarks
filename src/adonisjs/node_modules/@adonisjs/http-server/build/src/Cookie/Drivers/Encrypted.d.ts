/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { EncryptionContract } from '@ioc:Adonis/Core/Encryption';
/**
 * Encrypt a value to be set as cookie
 */
export declare function pack(key: string, value: any, encryption: EncryptionContract): null | string;
/**
 * Returns a boolean, if the unpack method from this module can attempt
 * to unpack encrypted value.
 */
export declare function canUnpack(encryptedValue: string): boolean;
/**
 * Attempts to unpack the encrypted cookie value. Returns null, when fails to do so.
 * Only call this method, when `canUnpack` returns true, otherwise runtime
 * exceptions can be raised.
 */
export declare function unpack(key: string, encryptedValue: string, encryption: EncryptionContract): null | any;
