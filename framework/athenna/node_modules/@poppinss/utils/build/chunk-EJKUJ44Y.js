// src/slash.ts
function slash(path) {
  const isExtendedLengthPath = path.startsWith("\\\\?\\");
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, "/");
}

export {
  slash
};
