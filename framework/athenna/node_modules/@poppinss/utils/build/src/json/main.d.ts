import { safeParse } from './safe_parse.js';
import { safeStringify } from './safe_stringify.js';
declare const json: {
    safeParse: typeof safeParse;
    safeStringify: typeof safeStringify;
};
export default json;
