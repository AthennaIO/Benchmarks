import {
  main_default
} from "../chunk-K76IL3UP.js";
import "../chunk-NKGAOHNN.js";

// src/string_builder.ts
import { extname } from "node:path";
var StringBuilder = class {
  #value;
  constructor(value) {
    this.#value = typeof value === "string" ? value : value.toString();
  }
  /**
   * Applies dash case transformation
   */
  dashCase() {
    this.#value = main_default.dashCase(this.#value);
    return this;
  }
  /**
   * Applies dot case transformation
   */
  dotCase() {
    this.#value = main_default.dotCase(this.#value);
    return this;
  }
  /**
   * Applies snake case transformation
   */
  snakeCase() {
    this.#value = main_default.snakeCase(this.#value);
    return this;
  }
  /**
   * Applies pascal case transformation
   */
  pascalCase() {
    this.#value = main_default.pascalCase(this.#value);
    return this;
  }
  /**
   * Applies camelcase case transformation
   */
  camelCase() {
    this.#value = main_default.camelCase(this.#value);
    return this;
  }
  /**
   * Applies capital case transformation
   */
  capitalCase() {
    this.#value = main_default.capitalCase(this.#value);
    return this;
  }
  /**
   * Applies title case transformation
   */
  titleCase() {
    this.#value = main_default.titleCase(this.#value);
    return this;
  }
  /**
   * Applies sentence case transformation
   */
  sentenceCase() {
    this.#value = main_default.sentenceCase(this.#value);
    return this;
  }
  /**
   * Removes all sorts of casing from the string
   */
  noCase() {
    this.#value = main_default.noCase(this.#value);
    return this;
  }
  /**
   * Converts value to its plural form
   */
  plural() {
    this.#value = main_default.pluralize(this.#value);
    return this;
  }
  /**
   * Converts value to its singular form
   */
  singular() {
    this.#value = main_default.singular(this.#value);
    return this;
  }
  /**
   * Converts value to a URL friendly slug
   */
  slugify() {
    this.#value = main_default.slug(this.#value);
    return this;
  }
  /**
   * Removes a given suffix from the string
   */
  removeSuffix(suffix) {
    this.#value = this.#value.replace(new RegExp(`[-_]?${suffix}$`, "i"), "");
    return this;
  }
  /**
   * Adds suffix to the string
   */
  suffix(suffix) {
    this.removeSuffix(suffix);
    this.#value = `${this.#value}${suffix}`;
    return this;
  }
  /**
   * Removes a given prefix from the string
   */
  removePrefix(prefix) {
    this.#value = this.#value.replace(new RegExp(`^${prefix}[-_]?`, "i"), "");
    return this;
  }
  /**
   * Adds prefix to the string
   */
  prefix(prefix) {
    this.removePrefix(prefix);
    this.#value = `${prefix}${this.#value}`;
    return this;
  }
  /**
   * Removes extension from the value
   */
  removeExtension() {
    this.#value = this.#value.replace(new RegExp(`${extname(this.#value)}$`), "");
    return this;
  }
  /**
   * Adds extension to the value
   */
  ext(extension) {
    this.removeExtension();
    this.#value = `${this.#value}.${extension.replace(/^\./, "")}`;
    return this;
  }
  toString() {
    return this.#value;
  }
};
export {
  StringBuilder as default
};
//# sourceMappingURL=string_builder.js.map