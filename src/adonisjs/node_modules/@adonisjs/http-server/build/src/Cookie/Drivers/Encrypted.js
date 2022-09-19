"use strict";
/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpack = exports.canUnpack = exports.pack = void 0;
/**
 * Encrypt a value to be set as cookie
 */
function pack(key, value, encryption) {
    if (value === undefined || value === null) {
        return null;
    }
    return `e:${encryption.encrypt(value, undefined, key)}`;
}
exports.pack = pack;
/**
 * Returns a boolean, if the unpack method from this module can attempt
 * to unpack encrypted value.
 */
function canUnpack(encryptedValue) {
    return typeof encryptedValue === 'string' && encryptedValue.substr(0, 2) === 'e:';
}
exports.canUnpack = canUnpack;
/**
 * Attempts to unpack the encrypted cookie value. Returns null, when fails to do so.
 * Only call this method, when `canUnpack` returns true, otherwise runtime
 * exceptions can be raised.
 */
function unpack(key, encryptedValue, encryption) {
    const value = encryptedValue.slice(2);
    if (!value) {
        return null;
    }
    return encryption.decrypt(value, key);
}
exports.unpack = unpack;
