"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addSlashes = require("./addSlashes");

Object.keys(_addSlashes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addSlashes[key];
    }
  });
});

var _stripSlashes = require("./stripSlashes");

Object.keys(_stripSlashes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _stripSlashes[key];
    }
  });
});
//# sourceMappingURL=index.js.map