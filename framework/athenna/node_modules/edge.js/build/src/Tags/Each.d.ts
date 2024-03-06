import lodash from '@poppinss/utils/lodash';
import { TagContract } from '../types.js';
import { asyncEach, each } from '../utils.js';
declare module '../template.js' {
    interface Template {
        loopAsync: typeof asyncEach;
        loop: typeof each;
        size: (typeof lodash)['size'];
    }
}
/**
 * Each tag is used to run a foreach loop on arrays and even objects.
 *
 * ```edge
 * @each((user, index) in users)
 *   {{ user }} {{ index }}
 * @endeach
 * ```
 */
export declare const eachTag: TagContract;
