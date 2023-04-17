import { deprecated } from './deprecated';
import { CHAR_TO_ESCAPE } from './escapes';
export function addSlashes(str, countOrCharactersOrOptions, characters = `\b\f\n\r\t\v\0'"\\`) {
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
      const escape = CHAR_TO_ESCAPE.get(char);

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

export const add = (str, count) => {
  deprecated('The add() function is deprecated and should be replaced with addSlashes().');
  return addSlashes(str, count, `\n\0'"\\`);
};
//# sourceMappingURL=addSlashes.js.map