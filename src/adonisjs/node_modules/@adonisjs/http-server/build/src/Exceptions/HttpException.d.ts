/**
 * @adonisjs/http-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/// <reference path="../../adonis-typings/index.d.ts" />
import { Exception } from '@poppinss/utils';
/**
 * Custom exception to abort requests as one liners
 */
export declare class HttpException extends Exception {
    body: any;
    /**
     * This method returns an instance of the exception class
     */
    static invoke(body: any, status: number, code?: string): HttpException;
}
