"use strict";

exports.__esModule = true;
exports.default = void 0;

var _slashes = require("slashes");

var _isConstantStringLiteral = _interopRequireDefault(require("./is-constant-string-literal"));

var _parseType = _interopRequireDefault(require("./parse-type"));

var _resolve = _interopRequireDefault(require("./resolve"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const parseModuleSpecifier = (moduleSpecifierString, {
  isDynamicImport,
  resolveFrom
}) => {
  const {
    isConstant,
    value
  } = !isDynamicImport || (0, _isConstantStringLiteral.default)(moduleSpecifierString) ? {
    isConstant: true,
    value: (0, _slashes.stripSlashes)(moduleSpecifierString.substring(1, moduleSpecifierString.length - 1))
  } : {
    isConstant: false,
    value: undefined
  };
  return {
    type: isConstant ? (0, _parseType.default)(value) : `unknown`,
    isConstant,
    code: moduleSpecifierString,
    value,
    resolved: typeof resolveFrom === `string` && isConstant ? (0, _resolve.default)(resolveFrom, value) : undefined
  };
};

var _default = parseModuleSpecifier;
exports.default = _default;