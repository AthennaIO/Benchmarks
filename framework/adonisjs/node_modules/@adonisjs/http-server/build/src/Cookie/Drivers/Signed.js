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
 * Signs a value to be shared as a cookie. The signed output has a
 * hash to verify tampering with the original value
 */
function pack(key, value, encryption) {
    if (value === undefined || value === null) {
        return null;
    }
    return `s:${encryption.verifier.sign(value, undefined, key)}`;
}
exports.pack = pack;
/**
 * Returns a boolean, if the unpack method from this module can attempt
 * to unpack the signed value.
 */
function canUnpack(signedValue) {
    return typeof signedValue === 'string' && signedValue.substr(0, 2) === 's:';
}
exports.canUnpack = canUnpack;
/**
 * Attempts to unpack the signed value. Make sure to call `canUnpack` before
 * calling this method.
 */
function unpack(key, signedValue, encryption) {
    const value = signedValue.slice(2);
    if (!value) {
        return null;
    }
    return encryption.verifier.unsign(value, key);
}
exports.unpack = unpack;
