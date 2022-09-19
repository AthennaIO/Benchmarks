const guard = new Set();
export function deprecated(message) {
  if (!guard.has(message)) {
    guard.add(message);
    console.warn(message);
  }
}
//# sourceMappingURL=deprecated.js.map