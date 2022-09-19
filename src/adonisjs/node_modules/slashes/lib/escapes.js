export function getSingleCharEscapes() {
  return [['b', '\b'], ['f', '\f'], ['n', '\n'], ['r', '\r'], ['t', '\t'], ['v', '\v'], ['0', '\0']].reduce((map, [key, value]) => {
    map.set(key, value);
    return map;
  }, new Map());
}
export const SINGLE_CHAR_ESCAPES = getSingleCharEscapes();
export const CHAR_TO_ESCAPE = [...SINGLE_CHAR_ESCAPES.keys()].reduce((map, code) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  map.set(SINGLE_CHAR_ESCAPES.get(code), `\\${code}`);
  return map;
}, new Map());
//# sourceMappingURL=escapes.js.map