// src/assert.ts
import { inspect } from "node:util";
import { AssertionError } from "node:assert";
function assert(value, message) {
  return assertExists(value, message);
}
function assertExists(value, message) {
  if (!value) {
    throw new AssertionError({ message: message ?? "value is falsy" });
  }
}
function assertUnreachable(x) {
  throw new AssertionError({ message: `unreachable code executed: ${inspect(x)}` });
}
function assertNotNull(value, message) {
  if (value === null) {
    throw new AssertionError({ message: message ?? "unexpected null value" });
  }
}
function assertIsDefined(value, message) {
  if (value === void 0) {
    throw new AssertionError({ message: message ?? "unexpected undefined value" });
  }
}
export {
  assert,
  assertExists,
  assertIsDefined,
  assertNotNull,
  assertUnreachable
};
//# sourceMappingURL=assert.js.map