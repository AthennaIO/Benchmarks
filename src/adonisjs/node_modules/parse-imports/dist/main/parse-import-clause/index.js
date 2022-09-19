"use strict";

exports.__esModule = true;
exports.default = void 0;

var _skip = require("./skip");

var _parseNamedImports = _interopRequireDefault(require("./parse-named-imports"));

var _parseNamespaceImport = _interopRequireDefault(require("./parse-namespace-import"));

var _parseDefaultImport = _interopRequireDefault(require("./parse-default-import"));

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
// Assumes import clause is syntactically valid
const parseImportClause = importClauseString => {
  let defaultImport;
  let namespaceImport;
  const namedImports = [];

  for (let i = 0; i < importClauseString.length; i++) {
    if (_skip.separatorRegex.test(importClauseString[i])) {
      continue;
    }

    if (importClauseString[i] === `{`) {
      let newNamedImports;
      ({
        namedImports: newNamedImports,
        i
      } = (0, _parseNamedImports.default)(importClauseString, i));
      namedImports.push(...newNamedImports);
    } else if (importClauseString[i] === `*`) {
      ;
      ({
        namespaceImport,
        i
      } = (0, _parseNamespaceImport.default)(importClauseString, i));
    } else {
      ;
      ({
        defaultImport,
        i
      } = (0, _parseDefaultImport.default)(importClauseString, i));
    }
  }

  return {
    default: defaultImport,
    namespace: namespaceImport,
    named: namedImports
  };
};

var _default = parseImportClause;
exports.default = _default;