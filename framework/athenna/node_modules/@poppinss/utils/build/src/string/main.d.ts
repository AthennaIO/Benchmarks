import { random } from './random.js';
import { excerpt } from './excerpt.js';
import { ordinal } from './ordinal.js';
import { truncate } from './truncate.js';
import { sentence } from './sentence.js';
import { interpolate } from './interpolate.js';
import { pluralize } from './pluralize.js';
import { noCase, dotCase, dashCase, camelCase, snakeCase, titleCase, pascalCase, capitalCase, sentenceCase } from './change_case.js';
/**
 * Condense multiple whitespaces from a string
 */
declare function condenseWhitespace(value: string): string;
declare const string: {
    excerpt: typeof excerpt;
    truncate: typeof truncate;
    slug: typeof import("slugify").default;
    interpolate: typeof interpolate;
    plural: typeof import("pluralize").plural;
    pluralize: typeof pluralize;
    singular: typeof import("pluralize").singular;
    isPlural: typeof import("pluralize").isPlural;
    isSingular: typeof import("pluralize").isSingular;
    camelCase: typeof camelCase;
    capitalCase: typeof capitalCase;
    dashCase: typeof dashCase;
    dotCase: typeof dotCase;
    noCase: typeof noCase;
    pascalCase: typeof pascalCase;
    sentenceCase: typeof sentenceCase;
    snakeCase: typeof snakeCase;
    titleCase: typeof titleCase;
    random: typeof random;
    sentence: typeof sentence;
    condenseWhitespace: typeof condenseWhitespace;
    seconds: {
        format(seconds: number, long?: boolean | undefined): string;
        parse(duration: string | number): number;
    };
    milliseconds: {
        format(milliseconds: number, long?: boolean | undefined): string;
        parse(duration: string | number): number;
    };
    bytes: {
        format(valueInBytes: number, options?: import("bytes").BytesOptions | undefined): string;
        parse(unit: string | number): number;
    };
    ordinal: typeof ordinal;
};
export default string;
