import {
  base64,
  milliseconds_default
} from "./chunk-NKGAOHNN.js";

// src/string/bytes.ts
import bytes from "bytes";
var bytes_default = {
  format(valueInBytes, options) {
    return bytes.format(valueInBytes, options);
  },
  /**
   * Parse the unit expression to bytes. If the unit value
   * is a number, then it will be returned as it is considering
   * it is already in bytes.
   */
  parse(unit) {
    if (typeof unit === "number") {
      return unit;
    }
    return bytes.parse(unit);
  }
};

// src/string/seconds.ts
import { parse, format } from "@lukeed/ms";
var seconds_default = {
  format(seconds, long) {
    return format(seconds * 1e3, long);
  },
  /**
   * Parse time expression string to seconds. The number value
   * is returned as it is, considering it is already in seconds
   */
  parse(duration) {
    if (typeof duration === "number") {
      return duration;
    }
    const milliseconds = parse(duration);
    if (milliseconds === void 0) {
      throw new Error(`Invalid duration expression "${duration}"`);
    }
    return Math.floor(milliseconds / 1e3);
  }
};

// src/string/slugify.ts
import { default as slugifyPkg } from "slugify";
var slug = slugifyPkg;

// src/string/random.ts
import { randomBytes } from "node:crypto";
function random(size) {
  const bits = (size + 1) * 6;
  const buffer = randomBytes(Math.ceil(bits / 8));
  return base64.urlEncode(buffer).slice(0, size);
}

// src/string/excerpt.ts
import truncatise from "truncatise";
function excerpt(sentence2, charactersLimit, options) {
  return truncatise(sentence2, {
    TruncateLength: charactersLimit,
    /**
     * Do not complete words when "completeWords" is not explicitly set
     * to true
     */
    Strict: options && options.completeWords === true ? false : true,
    StripHTML: true,
    TruncateBy: "characters",
    Suffix: options && options.suffix
  });
}

// src/string/ordinal.ts
function ordinal(value) {
  const transformedValue = Math.abs(typeof value === "string" ? Number.parseInt(value) : value);
  if (!Number.isFinite(transformedValue) || Number.isNaN(transformedValue)) {
    throw new Error("Cannot ordinalize invalid or infinite numbers");
  }
  const percent = transformedValue % 100;
  if (percent >= 10 && percent <= 20) {
    return `${value}th`;
  }
  const decimal = transformedValue % 10;
  switch (decimal) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}

// src/string/truncate.ts
import truncatise2 from "truncatise";
function truncate(sentence2, charactersLimit, options) {
  return truncatise2(sentence2, {
    TruncateLength: charactersLimit,
    /**
     * Do not complete words when "completeWords" is not explicitly set
     * to true
     */
    Strict: options && options.completeWords === true ? false : true,
    StripHTML: false,
    TruncateBy: "characters",
    Suffix: options && options.suffix
  });
}

// src/string/sentence.ts
function sentence(values, options) {
  if (values.length === 0) {
    return "";
  }
  if (values.length === 1) {
    return values[0];
  }
  if (values.length === 2) {
    return `${values[0]}${options?.pairSeparator || " and "}${values[1]}`;
  }
  const normalized = Object.assign({ separator: ", ", lastSeparator: ", and " }, options);
  return `${values.slice(0, -1).join(normalized.separator)}${normalized.lastSeparator}${values[values.length - 1]}`;
}

// src/string/interpolate.ts
function parseProp(data, key) {
  const tokens = key.split(".");
  while (tokens.length) {
    if (data === null || typeof data !== "object") {
      return;
    }
    const token = tokens.shift();
    data = Object.hasOwn(data, token) ? data[token] : void 0;
  }
  return data;
}
function interpolate(input, data) {
  return input.replace(/(\\)?{{(.*?)}}/g, (_, escapeChar, key) => {
    if (escapeChar) {
      return `{{${key}}}`;
    }
    return parseProp(data, key.trim());
  });
}

// src/string/pluralize.ts
import { default as pluralizePkg } from "pluralize";
function pluralize(word, count, inclusive) {
  return pluralizePkg(word, count, inclusive);
}
pluralize.addPluralRule = pluralizePkg.addPluralRule;
pluralize.addSingularRule = pluralizePkg.addSingularRule;
pluralize.addIrregularRule = pluralizePkg.addIrregularRule;
pluralize.addUncountableRule = pluralizePkg.addUncountableRule;
var plural = pluralizePkg.plural;
var singular = pluralizePkg.singular;
var isPlural = pluralizePkg.isPlural;
var isSingular = pluralizePkg.isSingular;

// src/string/change_case.ts
import * as changeCase from "case-anything";
var NO_CASE_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var NO_CASE_STRIP_REGEXP = /[^A-Z0-9]+/gi;
var SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
var TOKENS = /[^\s:–—-]+|./g;
var WHITESPACE = /\s/;
var IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
var ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;
function titleCase(input) {
  let output = "";
  let result;
  while ((result = TOKENS.exec(input)) !== null) {
    const { 0: token, index } = result;
    if (!IS_MANUAL_CASE.test(token) && (!SMALL_WORDS.test(token) || index === 0 || index + token.length === input.length) && (input.charAt(index + token.length) !== ":" || WHITESPACE.test(input.charAt(index + token.length + 1)))) {
      output += token.replace(ALPHANUMERIC_PATTERN, (char) => char.toUpperCase());
      continue;
    }
    output += token;
  }
  return output;
}
function camelCase2(value) {
  return changeCase.camelCase(value);
}
function snakeCase2(value) {
  return changeCase.snakeCase(value);
}
function dashCase(value, options) {
  if (options && options.capitalize) {
    return changeCase.trainCase(value);
  }
  return changeCase.kebabCase(value);
}
function pascalCase2(value) {
  return changeCase.pascalCase(value);
}
function capitalCase2(value) {
  return changeCase.capitalCase(value);
}
function sentenceCase(value) {
  return noCase(value, (input, index) => {
    const result = input.toLowerCase();
    if (index === 0) {
      return input.charAt(0).toUpperCase() + input.substring(1);
    }
    return result;
  });
}
function dotCase(value, options) {
  const transformedValue = changeCase.dotNotation(value);
  if (options && options.lowerCase) {
    return transformedValue.toLowerCase();
  }
  return transformedValue;
}
function noCase(value, transform) {
  let result = NO_CASE_SPLIT_REGEXP.reduce((input, regex) => input.replace(regex, "$1\0$2"), value);
  result = result.replace(NO_CASE_STRIP_REGEXP, "\0");
  let start = 0;
  let end = result.length;
  while (result.charAt(start) === "\0") {
    start++;
  }
  while (result.charAt(end - 1) === "\0") {
    end--;
  }
  return result.slice(start, end).split("\0").map(transform || ((input) => input.toLowerCase())).join(" ");
}

// src/string/main.ts
function condenseWhitespace(value) {
  return value.trim().replace(/\s{2,}/g, " ");
}
var string = {
  excerpt,
  truncate,
  slug,
  interpolate,
  plural,
  pluralize,
  singular,
  isPlural,
  isSingular,
  camelCase: camelCase2,
  capitalCase: capitalCase2,
  dashCase,
  dotCase,
  noCase,
  pascalCase: pascalCase2,
  sentenceCase,
  snakeCase: snakeCase2,
  titleCase,
  random,
  sentence,
  condenseWhitespace,
  seconds: seconds_default,
  milliseconds: milliseconds_default,
  bytes: bytes_default,
  ordinal
};
var main_default = string;

export {
  main_default
};
//# sourceMappingURL=chunk-K76IL3UP.js.map