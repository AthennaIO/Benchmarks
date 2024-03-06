import {
  base64,
  milliseconds_default
} from "./chunk-NKGAOHNN.js";
import {
  main_default
} from "./chunk-IOBSMUFC.js";

// index.ts
import { fileURLToPath as fileURLToPath3 } from "node:url";
import { join as pathJoin, dirname as pathDirname } from "node:path";

// src/secret.ts
var REDACTED = "[redacted]";
var Secret = class _Secret {
  /** The secret value */
  #value;
  #keyword;
  constructor(value, redactedKeyword) {
    this.#value = value;
    this.#keyword = redactedKeyword || REDACTED;
  }
  toJSON() {
    return this.#keyword;
  }
  valueOf() {
    return this.#keyword;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.#keyword;
  }
  toLocaleString() {
    return this.#keyword;
  }
  toString() {
    return this.#keyword;
  }
  /**
   * Returns the original value
   */
  release() {
    return this.#value;
  }
  /**
   * Transform the original value and create a new
   * secret from it.
   */
  map(transformFunc) {
    return new _Secret(transformFunc(this.#value));
  }
};

// src/compose.ts
function compose(superclass, ...mixins) {
  return mixins.reduce((c, mixin) => mixin(c), superclass);
}

// src/exception.ts
import { format } from "node:util";
var Exception = class extends Error {
  /**
   * Name of the class that raised the exception.
   */
  name;
  /**
   * A status code for the error. Usually helpful when converting errors
   * to HTTP responses.
   */
  status;
  constructor(message, options) {
    super(message, options);
    const ErrorConstructor = this.constructor;
    this.name = ErrorConstructor.name;
    this.message = message || ErrorConstructor.message || "";
    this.status = options?.status || ErrorConstructor.status || 500;
    const code = options?.code || ErrorConstructor.code;
    if (code !== void 0) {
      this.code = code;
    }
    const help = ErrorConstructor.help;
    if (help !== void 0) {
      this.help = help;
    }
    Error.captureStackTrace(this, ErrorConstructor);
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    if (this.code) {
      return `${this.name} [${this.code}]: ${this.message}`;
    }
    return `${this.name}: ${this.message}`;
  }
};
function createError(message, code, status) {
  return class extends Exception {
    static message = message;
    static code = code;
    static status = status;
    constructor(args, options) {
      super(format(message, ...args || []), options);
      this.name = "Exception";
    }
  };
}

// src/exceptions/runtime_exception.ts
var RuntimeException = class extends Exception {
  static code = "E_RUNTIME_EXCEPTION";
  static status = 500;
};

// src/import_default.ts
async function importDefault(importFn, filePath) {
  const moduleExports = await importFn();
  if (!("default" in moduleExports)) {
    const errorMessage = filePath ? `Missing "export default" in module "${filePath}"` : `Missing "export default" from lazy import "${importFn}"`;
    throw new RuntimeException(errorMessage, {
      cause: {
        source: importFn
      }
    });
  }
  return moduleExports.default;
}

// src/define_static_property.ts
import lodash from "@poppinss/utils/lodash";
function defineStaticProperty(self, propertyName, {
  initialValue,
  strategy
}) {
  if (!self.hasOwnProperty(propertyName)) {
    const value = self[propertyName];
    if (strategy === "define" || value === void 0) {
      Object.defineProperty(self, propertyName, {
        value: initialValue,
        configurable: true,
        enumerable: true,
        writable: true
      });
      return;
    }
    Object.defineProperty(self, propertyName, {
      value: typeof strategy === "function" ? strategy(value) : lodash.cloneDeep(value),
      configurable: true,
      enumerable: true,
      writable: true
    });
  }
}

// src/flatten.ts
import { flattie } from "flattie";
function flatten(input, glue, keepNullish) {
  return flattie(input, glue, keepNullish);
}

// src/fs_import_all.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import lodash2 from "@poppinss/utils/lodash";
import { extname as extname2, relative, sep } from "node:path";

// src/fs_read_all.ts
import { join } from "node:path";
import { readdir, stat } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

// src/slash.ts
import { default as default2 } from "slash";

// src/natural_sort.ts
function naturalSort(current, next) {
  return current.localeCompare(next, void 0, { numeric: true, sensitivity: "base" });
}

// src/fs_read_all.ts
function filterDotFiles(fileName) {
  return fileName[0] !== ".";
}
async function readFiles(root, files, options, relativePath) {
  const location = join(root, relativePath);
  const stats = await stat(location);
  if (stats.isDirectory()) {
    let locationFiles = await readdir(location);
    await Promise.all(
      locationFiles.filter(filterDotFiles).map((file) => {
        return readFiles(root, files, options, join(relativePath, file));
      })
    );
    return;
  }
  const pathType = options.pathType || "relative";
  switch (pathType) {
    case "relative":
      files.push(relativePath);
      break;
    case "absolute":
      files.push(location);
      break;
    case "unixRelative":
      files.push(default2(relativePath));
      break;
    case "unixAbsolute":
      files.push(default2(location));
      break;
    case "url":
      files.push(pathToFileURL(location).href);
  }
}
async function fsReadAll(location, options) {
  const normalizedLocation = typeof location === "string" ? location : fileURLToPath(location);
  const normalizedOptions = Object.assign({ absolute: false, sort: naturalSort }, options);
  const files = [];
  try {
    await stat(normalizedLocation);
  } catch (error) {
    if (normalizedOptions.ignoreMissingRoot) {
      return [];
    }
    throw error;
  }
  await readFiles(normalizedLocation, files, normalizedOptions, "");
  if (normalizedOptions.filter) {
    return files.filter(normalizedOptions.filter).sort(normalizedOptions.sort);
  }
  return files.sort(normalizedOptions.sort);
}

// src/is_script_file.ts
import { extname } from "node:path";
var JS_MODULES = [".js", ".json", ".cjs", ".mjs"];
function isScriptFile(filePath) {
  const ext = extname(filePath);
  if (JS_MODULES.includes(ext)) {
    return true;
  }
  if (ext === ".ts" && !filePath.endsWith(".d.ts")) {
    return true;
  }
  return false;
}

// src/fs_import_all.ts
async function importFile(basePath, fileURL, values, options) {
  const filePath = fileURLToPath2(fileURL);
  const fileExtension = extname2(filePath);
  const collectionKey = relative(basePath, filePath).replace(new RegExp(`${fileExtension}$`), "").split(sep);
  const exportedValue = fileExtension === ".json" ? await import(fileURL, { assert: { type: "json" } }) : await import(fileURL);
  lodash2.set(
    values,
    options.transformKeys ? options.transformKeys(collectionKey) : collectionKey,
    exportedValue.default ? exportedValue.default : { ...exportedValue }
  );
}
async function fsImportAll(location, options) {
  options = options || {};
  const collection = {};
  const normalizedLocation = typeof location === "string" ? location : fileURLToPath2(location);
  const files = await fsReadAll(normalizedLocation, {
    filter: isScriptFile,
    ...options,
    pathType: "url"
  });
  await Promise.all(files.map((file) => importFile(normalizedLocation, file, collection, options)));
  return collection;
}

// src/message_builder.ts
var MessageBuilder = class {
  #getExpiryDate(expiresIn) {
    if (!expiresIn) {
      return void 0;
    }
    const expiryMs = milliseconds_default.parse(expiresIn);
    return new Date(Date.now() + expiryMs);
  }
  /**
   * Returns a boolean telling, if message has been expired or not
   */
  #isExpired(message) {
    if (!message.expiryDate) {
      return false;
    }
    const expiryDate = new Date(message.expiryDate);
    return Number.isNaN(expiryDate.getTime()) || expiryDate < /* @__PURE__ */ new Date();
  }
  /**
   * Builds a message by encoding expiry date and purpose inside it.
   */
  build(message, expiresIn, purpose) {
    const expiryDate = this.#getExpiryDate(expiresIn);
    return main_default.safeStringify({ message, purpose, expiryDate });
  }
  /**
   * Verifies the message for expiry and purpose.
   */
  verify(message, purpose) {
    const parsed = main_default.safeParse(message);
    if (typeof parsed !== "object" || !parsed) {
      return null;
    }
    if (!parsed.message) {
      return null;
    }
    if (parsed.purpose !== purpose) {
      return null;
    }
    if (this.#isExpired(parsed)) {
      return null;
    }
    return parsed.message;
  }
};

// src/object_builder.ts
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

// src/safe_equal.ts
import { Buffer } from "node:buffer";
import { timingSafeEqual } from "node:crypto";
function safeEqual(trustedValue, userInput) {
  if (typeof trustedValue === "string" && typeof userInput === "string") {
    const trustedLength = Buffer.byteLength(trustedValue);
    const trustedValueBuffer = Buffer.alloc(trustedLength, 0, "utf-8");
    trustedValueBuffer.write(trustedValue);
    const userValueBuffer = Buffer.alloc(trustedLength, 0, "utf-8");
    userValueBuffer.write(userInput);
    return timingSafeEqual(trustedValueBuffer, userValueBuffer) && trustedLength === Buffer.byteLength(userInput);
  }
  return timingSafeEqual(
    Buffer.from(trustedValue),
    Buffer.from(userInput)
  );
}

// src/exceptions/invalid_arguments_exception.ts
var InvalidArgumentsException = class extends Exception {
  static code = "E_INVALID_ARGUMENTS_EXCEPTION";
  static status = 500;
};

// index.ts
function getDirname(url) {
  return pathDirname(getFilename(url));
}
function getFilename(url) {
  return fileURLToPath3(url);
}
function joinToURL(url, ...str) {
  return pathJoin(getDirname(url), ...str);
}
export {
  Exception,
  InvalidArgumentsException,
  MessageBuilder,
  ObjectBuilder,
  RuntimeException,
  Secret,
  base64,
  compose,
  createError,
  defineStaticProperty,
  flatten,
  fsImportAll,
  fsReadAll,
  getDirname,
  getFilename,
  importDefault,
  isScriptFile,
  joinToURL,
  naturalSort,
  safeEqual,
  default2 as slash
};
//# sourceMappingURL=index.js.map