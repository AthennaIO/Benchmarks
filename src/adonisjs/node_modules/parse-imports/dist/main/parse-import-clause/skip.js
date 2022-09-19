"use strict";

exports.__esModule = true;
exports.skipNonSeparators = exports.skipSeparators = exports.separatorRegex = void 0;

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
const separatorRegex = /^(?:\s+|,)$/u;
exports.separatorRegex = separatorRegex;

const skipSeparators = (imported, i) => {
  while (i < imported.length && separatorRegex.test(imported[i])) {
    i++;
  }

  return i;
};

exports.skipSeparators = skipSeparators;

const skipNonSeparators = (imported, i) => {
  while (i < imported.length && !separatorRegex.test(imported[i])) {
    i++;
  }

  return i;
};

exports.skipNonSeparators = skipNonSeparators;