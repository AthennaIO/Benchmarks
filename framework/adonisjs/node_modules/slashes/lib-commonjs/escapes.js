"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleCharEscapes = getSingleCharEscapes;
exports.CHAR_TO_ESCAPE = exports.SINGLE_CHAR_ESCAPES = void 0;

function getSingleCharEscapes() {
  return [['b', '\b'], ['f', '\f'], ['n', '\n'], ['r', '\r'], ['t', '\t'], ['v', '\v'], ['0', '\0']].reduce((map, [key, value]) => {
    map.set(key, value);
    return map;
  }, new Map());
}

const SINGLE_CHAR_ESCAPES = getSingleCharEscapes();
exports.SINGLE_CHAR_ESCAPES = SINGLE_CHAR_ESCAPES;
const CHAR_TO_ESCAPE = [...SINGLE_CHAR_ESCAPES.keys()].reduce((map, code) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  map.set(SINGLE_CHAR_ESCAPES.get(code), `\\${code}`);
  return map;
}, new Map());
exports.CHAR_TO_ESCAPE = CHAR_TO_ESCAPE;
//# sourceMappingURL=escapes.js.map