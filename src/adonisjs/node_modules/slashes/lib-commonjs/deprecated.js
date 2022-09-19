"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecated = deprecated;
const guard = new Set();

function deprecated(message) {
  if (!guard.has(message)) {
    guard.add(message);
    console.warn(message);
  }
}
//# sourceMappingURL=deprecated.js.map