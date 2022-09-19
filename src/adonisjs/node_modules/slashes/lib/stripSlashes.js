import { deprecated } from './deprecated';
import { getSingleCharEscapes } from './escapes';
export function stripSlashes(str, countOrOptions) {
  let options;

  if (typeof countOrOptions === 'number') {
    options = {
      count: countOrOptions
    };
  } else if (countOrOptions && typeof countOrOptions === 'object') {
    options = countOrOptions;
  } else {
    options = {};
  }

  const {
    count = 1,
    defaultEscapeValue = true,
    b = defaultEscapeValue,
    f = defaultEscapeValue,
    n = defaultEscapeValue,
    r = defaultEscapeValue,
    t = defaultEscapeValue,
    v = defaultEscapeValue,
    '0': nul = defaultEscapeValue,
    x = defaultEscapeValue,
    u = defaultEscapeValue,
    uEs6 = u
  } = options;
  const singleCharEscapes = getSingleCharEscapes();
  if (!b) singleCharEscapes.delete('b');
  if (!f) singleCharEscapes.delete('f');
  if (!n) singleCharEscapes.delete('n');
  if (!r) singleCharEscapes.delete('r');
  if (!t) singleCharEscapes.delete('t');
  if (!v) singleCharEscapes.delete('v');
  if (!nul) singleCharEscapes.delete('0');
  const patterns = [];
  if (x) patterns.push('x[a-fA-F0-9]{2}');
  if (u) patterns.push('u[a-fA-F0-9]{4}');
  if (uEs6) patterns.push('u{[a-fA-F0-9]+}');
  const rx = new RegExp(`\\\\(${[...patterns, '.', '$'].join('|')})`, 'g');

  for (let i = Math.max(1, count >> 0); i > 0; --i) {
    str = str.replace(rx, (...[, g1]) => {
      const suffix = g1;

      if (suffix.length > 1) {
        if (suffix[0] === 'x') {
          return String.fromCharCode(Number.parseInt(suffix.slice(1), 16));
        } else if (suffix[0] === 'u') {
          if (suffix[1] === '{') {
            const codePointStr = suffix.slice(2, -1);
            const codePoint = Number.parseInt(codePointStr, 16);

            if (codePoint > 0x10ffff) {
              // Not valid unicode, so just remove the slash, leaving the
              // trailing characters in place.
              return suffix;
            } else if (codePoint >= 0x10000) {
              const u = codePoint - 0x10000;
              const s1 = 0xd800 + (u >> 10);
              const s2 = 0xdc00 + (u & 0x3ff);
              return `${String.fromCharCode(s1, s2)}`;
            }

            return String.fromCharCode(codePoint);
          }

          return String.fromCharCode(Number.parseInt(suffix.slice(1), 16));
        }
      }

      return singleCharEscapes.get(suffix) || suffix;
    });
  }

  return str;
}
/**
 * @deprecated Use `stripSlashes()` instead.
 *
 * Maintains legacy behavior of _only_ recognizing newline (`"\n"`) and null
 * escape sequences (`"\0"`). Other slashes will not consume any trailing
 * characters (e.g. `"\\r"` becomes `"r"`, _not a carriage return_).
 */

export const strip = (str, count) => {
  deprecated('The strip() function is deprecated and should be replaced with stripSlashes().');
  return stripSlashes(str, {
    count,
    defaultEscapeValue: false,
    n: true,
    '0': true
  });
};
//# sourceMappingURL=stripSlashes.js.map