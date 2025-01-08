import { default as slugifyPkg } from 'slugify';
/**
 * Typings of the slugify package are a bit off and therefore we have
 * to do this manual dance of re-assigning types
 */
export declare const slug: (typeof slugifyPkg)["default"];
