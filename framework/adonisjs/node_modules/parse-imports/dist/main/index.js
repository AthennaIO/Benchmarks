"use strict";

exports.__esModule = true;
exports.default = void 0;

var _esModuleLexer = require("es-module-lexer");

var _parseModuleSpecifier = _interopRequireDefault(require("./parse-module-specifier"));

var _parseImportClause = _interopRequireDefault(require("./parse-import-clause"));

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
const parseImports = async (code, {
  resolveFrom
} = {}) => {
  const [imports] = await (0, _esModuleLexer.parse)(code, resolveFrom != null ? resolveFrom : undefined);
  return function* () {
    for (let {
      d: dynamicImportStartIndex,
      ss: statementStartIndex,
      s: moduleSpecifierStartIndex,
      e: moduleSpecifierEndIndexExclusive
    } of imports) {
      const isDynamicImport = dynamicImportStartIndex > -1; // Include string literal quotes in character range

      if (!isDynamicImport) {
        moduleSpecifierStartIndex--;
        moduleSpecifierEndIndexExclusive++;
      }

      const moduleSpecifierString = code.substring(moduleSpecifierStartIndex, moduleSpecifierEndIndexExclusive);
      const moduleSpecifier = (0, _parseModuleSpecifier.default)(moduleSpecifierString, {
        isDynamicImport,
        resolveFrom
      });
      let importClause;

      if (!isDynamicImport) {
        let importClauseString = code.substring(statementStartIndex + `import`.length, moduleSpecifierStartIndex).trim();

        if (importClauseString.endsWith(`from`)) {
          importClauseString = importClauseString.substring(0, importClauseString.length - `from`.length);
        }

        importClause = (0, _parseImportClause.default)(importClauseString);
      }

      yield {
        isDynamicImport,
        moduleSpecifier,
        importClause
      };
    }
  }();
};

var _default = parseImports;
exports.default = _default;