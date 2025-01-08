import {
  Exception,
  createError
} from "./chunk-H54AK3PI.js";
import {
  slash
} from "./chunk-EJKUJ44Y.js";
import {
  InvalidArgumentsException,
  RuntimeException
} from "./chunk-4V5ON6P7.js";
import {
  main_default
} from "./chunk-XHQBV7AF.js";
import {
  __reExport
} from "./chunk-2KG3PWR4.js";

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

// src/base64.ts
var Base64 = class {
  encode(data, encoding) {
    if (typeof data === "string") {
      return Buffer.from(data, encoding).toString("base64");
    }
    if (Buffer.isBuffer(data)) {
      return data.toString("base64");
    }
    return Buffer.from(data).toString("base64");
  }
  decode(encoded, encoding = "utf-8", strict = false) {
    if (Buffer.isBuffer(encoded)) {
      return encoded.toString(encoding);
    }
    const decoded = Buffer.from(encoded, "base64").toString(encoding);
    const isInvalid = this.encode(decoded, encoding) !== encoded;
    if (strict && isInvalid) {
      throw new Error("Cannot decode malformed value");
    }
    return isInvalid ? null : decoded;
  }
  urlEncode(data, encoding) {
    const encoded = typeof data === "string" ? this.encode(data, encoding) : this.encode(data);
    return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
  }
  urlDecode(encoded, encoding = "utf-8", strict = false) {
    if (Buffer.isBuffer(encoded)) {
      return encoded.toString(encoding);
    }
    const decoded = Buffer.from(encoded, "base64").toString(encoding);
    const isInvalid = this.urlEncode(decoded, encoding) !== encoded;
    if (strict && isInvalid) {
      throw new Error("Cannot urlDecode malformed value");
    }
    return isInvalid ? null : decoded;
  }
};
var base64 = new Base64();

// src/compose.ts
function compose(superclass, ...mixins) {
  return mixins.reduce((c, mixin) => mixin(c), superclass);
}

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
      files.push(slash(relativePath));
      break;
    case "unixAbsolute":
      files.push(slash(location));
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
  const exportedValue = fileExtension === ".json" ? await import(fileURL, { with: { type: "json" } }) : await import(fileURL);
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
import string from "@poppinss/string";
var MessageBuilder = class {
  #getExpiryDate(expiresIn) {
    if (!expiresIn) {
      return void 0;
    }
    const expiryMs = string.milliseconds.parse(expiresIn);
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
var object_builder_exports = {};
__reExport(object_builder_exports, object_builder_star);
import * as object_builder_star from "@poppinss/object-builder";

// src/safe_equal.ts
import { Buffer as Buffer2 } from "node:buffer";
import { timingSafeEqual } from "node:crypto";
function safeEqual(trustedValue, userInput) {
  if (typeof trustedValue === "string" && typeof userInput === "string") {
    const trustedLength = Buffer2.byteLength(trustedValue);
    const trustedValueBuffer = Buffer2.alloc(trustedLength, 0, "utf-8");
    trustedValueBuffer.write(trustedValue);
    const userValueBuffer = Buffer2.alloc(trustedLength, 0, "utf-8");
    userValueBuffer.write(userInput);
    return timingSafeEqual(trustedValueBuffer, userValueBuffer) && trustedLength === Buffer2.byteLength(userInput);
  }
  return timingSafeEqual(
    Buffer2.from(trustedValue),
    Buffer2.from(userInput)
  );
}

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
var export_ObjectBuilder = object_builder_exports.ObjectBuilder;
export {
  Exception,
  InvalidArgumentsException,
  MessageBuilder,
  export_ObjectBuilder as ObjectBuilder,
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
  slash
};
