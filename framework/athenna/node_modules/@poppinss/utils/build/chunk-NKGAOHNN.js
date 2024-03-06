// src/base64.ts
var Base64 = class {
  encode(data, encoding) {
    if (typeof data === "string") {
      return Buffer.from(data, encoding).toString("base64");
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

// src/string/milliseconds.ts
import { parse, format } from "@lukeed/ms";
var milliseconds_default = {
  format(milliseconds, long) {
    return format(milliseconds, long);
  },
  /**
   * Parse time expression string to milliseconds. The number value
   * is returned as it is, considering it is already in milliseconds
   */
  parse(duration) {
    if (typeof duration === "number") {
      return duration;
    }
    const milliseconds = parse(duration);
    if (milliseconds === void 0) {
      throw new Error(`Invalid duration expression "${duration}"`);
    }
    return milliseconds;
  }
};

export {
  base64,
  milliseconds_default
};
//# sourceMappingURL=chunk-NKGAOHNN.js.map