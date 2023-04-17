"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSlashes = addSlashes;
exports.add = void 0;

var _deprecated = require("./deprecated");

var _escapes = require("./escapes");

function addSlashes(str, countOrCharactersOrOptions, characters = `\b\f\n\r\t\v\0'"\\`) {
  let count = 1;
  let escapeNonAscii = false;

  if (typeof countOrCharactersOrOptions === 'number') {
    count = countOrCharactersOrOptions;
  } else if (countOrCharactersOrOptions) {
    if (typeof countOrCharactersOrOptions === 'object') {
      ({
        count = count,
        characters = characters,
        escapeNonAscii = escapeNonAscii
      } = countOrCharactersOrOptions);
    } else {
      characters = countOrCharactersOrOptions;
    }
  }

  const rx = new RegExp(`[${characters.replace(/[\]\\^]/g, '\\$&')}]`, 'g');

  for (let i = Math.max(1, count >> 0); i > 0; --i) {
    str = str.replace(rx, char => {
      const escape = _escapes.CHAR_TO_ESCAPE.get(char);

      if (escape) {
        return escape;
      }

      const charCode = char.charCodeAt(0);

      if (charCode >= 0xd800 && charCode <= 0xf8ff) {
        const hex = charCode.toString(16);
        return `\\u${hex}`;
      } else if (escapeNonAscii && charCode > 0x7f) {
        let hex = charCode.toString(16);

        if (charCode <= 0xff) {
          return `\\x${hex}`;
        } else {
          while (hex.length < 4) hex = `0${hex}`;

          return `\\u${hex}`;
        }
      }

      return `\\${char}`;
    });
  }

  return str;
}
/**
 * @deprecated Use `addSlashes()` instead.
 *
 * Maintains the legacy behavior of only adding slashes to newlines (`"\n"`),
 * carriage returns (`"\r"`), nulls (`"\0"`), single quotes (`"'"`), double
 * quotes (`"\""`), and backslashes (`"\\"`).
 */


const add = (str, count) => {
  (0, _deprecated.deprecated)('The add() function is deprecated and should be replaced with addSlashes().');
  return addSlashes(str, count, `\n\0'"\\`);
};

exports.add = add;
//# sourceMappingURL=addSlashes.js.map