// index.ts
var ObjectBuilder = class {
  #ignoreNull;
  values;
  constructor(initialValue, ignoreNull) {
    this.values = initialValue;
    this.#ignoreNull = ignoreNull === true ? true : false;
  }
  add(key, value) {
    if (value === void 0) {
      return this;
    }
    if (this.#ignoreNull === true && value === null) {
      return this;
    }
    ;
    this.values[key] = value;
    return this;
  }
  /**
   * Remove key from the object
   */
  remove(key) {
    delete this.values[key];
    return this;
  }
  /**
   * Find if a value exists
   */
  has(key) {
    return this.get(key) !== void 0;
  }
  /**
   * Get the existing value for a given key
   */
  get(key) {
    return this.values[key];
  }
  /**
   * Get the underlying constructed object
   */
  toObject() {
    return this.values;
  }
};
export {
  ObjectBuilder
};
//# sourceMappingURL=index.js.map