import { default as pluralizePkg } from 'pluralize';
/**
 * Pluralize a word based upon the count. The method returns the
 * singular form when count is 1.
 */
export declare function pluralize(word: string, count?: number, inclusive?: boolean): string;
export declare namespace pluralize {
    var addPluralRule: typeof pluralizePkg.addPluralRule;
    var addSingularRule: typeof pluralizePkg.addSingularRule;
    var addIrregularRule: typeof pluralizePkg.addIrregularRule;
    var addUncountableRule: typeof pluralizePkg.addUncountableRule;
}
export declare const plural: typeof pluralizePkg.plural;
export declare const singular: typeof pluralizePkg.singular;
export declare const isPlural: typeof pluralizePkg.isPlural;
export declare const isSingular: typeof pluralizePkg.isSingular;
