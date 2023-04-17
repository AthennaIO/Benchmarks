"use strict";

exports.__esModule = true;
exports.default = void 0;

var _skip = require("./skip");

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
const parseNamespaceImport = (importClauseString, i) => {
  i++;
  i = (0, _skip.skipSeparators)(importClauseString, i);
  i += `as`.length;
  i = (0, _skip.skipSeparators)(importClauseString, i);
  const startIndex = i;
  i = (0, _skip.skipNonSeparators)(importClauseString, i);
  return {
    namespaceImport: importClauseString.substring(startIndex, i),
    i
  };
};

var _default = parseNamespaceImport;
exports.default = _default;