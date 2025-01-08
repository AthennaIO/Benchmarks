// src/json/safe_parse.ts
import { parse } from "secure-json-parse";
function safeParse(jsonString, reviver) {
  return parse(jsonString, reviver, {
    protoAction: "remove",
    constructorAction: "remove"
  });
}

// src/json/safe_stringify.ts
import { configure } from "safe-stable-stringify";
var stringify = configure({
  bigint: false,
  circularValue: void 0,
  deterministic: false
});
function jsonStringifyReplacer(replacer) {
  return function(key, value) {
    const val = replacer ? replacer.call(this, key, value) : value;
    if (typeof val === "bigint") {
      return val.toString();
    }
    return val;
  };
}
function safeStringify(value, replacer, space) {
  return stringify(value, jsonStringifyReplacer(replacer), space);
}

// src/json/main.ts
var json = {
  safeParse,
  safeStringify
};
var main_default = json;

export {
  main_default
};
