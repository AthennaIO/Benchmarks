"use strict";
/*
 * @adonisjs/core
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncoreDriver = void 0;
const path_1 = require("path");
const crypto_1 = require("crypto");
const fs_extra_1 = require("fs-extra");
/**
 * Resolves entry points and assets path for webpack encore. Relies
 * on the "manifest.json" and "entrypoints.json" files.
 *
 **********************************************************************
 * The driver assumes following format for the manifest.json file
 **********************************************************************
 *
 * ```json
 *  {
 *    "assetName": "assetUrl"
 *  }
 * ```
 **********************************************************************
 * The driver assumes following format for the entrypoints.json file
 ***********************************************************************
 *
 * ```json
 *  {
 *    "entrypoints": {
 *      "entrypointName": {
 *        "js": ["path1", "path2"],
 *        "css": ["path1", "path2"]
 *      }
 *    }
 *  }
 * ```
 */
class EncoreDriver {
    constructor(application) {
        this.application = application;
        this.name = 'encore';
        /**
         * Encore driver has support for entrypoints
         */
        this.hasEntrypoints = true;
        /**
         * Path to the output public dir. Defaults to `/public/assets`
         */
        this.publicPath = this.application.publicPath('assets');
    }
    /**
     * Returns the version of the assets by hashing the manifest file
     * contents
     */
    get version() {
        return (0, crypto_1.createHash)('md5').update(JSON.stringify(this.manifest())).digest('hex').slice(0, 10);
    }
    /**
     * Reads the file contents as JSON
     */
    readFileAsJSON(filePath) {
        /**
         * Ensure the file exists, otherwise raise a meaningful exception
         */
        if (!(0, fs_extra_1.pathExistsSync)(filePath)) {
            throw new Error(`Cannot find "${filePath}" file. Make sure you are compiling assets`);
        }
        return JSON.parse((0, fs_extra_1.readFileSync)(filePath, 'utf-8'));
    }
    /**
     * Returns the manifest contents as object
     */
    manifest() {
        /**
         * Use in-memory cache when exists
         */
        if (this.manifestCache) {
            this.application.logger.trace('reading encore manifest from cache');
            return this.manifestCache;
        }
        const manifest = this.readFileAsJSON((0, path_1.join)(this.publicPath, 'manifest.json'));
        this.application.logger.trace('reading encore manifest from %s', this.publicPath);
        /**
         * Cache manifest in production to avoid re-reading the file from disk
         */
        if (this.application.inProduction) {
            this.manifestCache = manifest;
        }
        return manifest;
    }
    /**
     * Returns path to a given asset file
     */
    assetPath(name) {
        const manifest = this.manifest();
        if (!manifest[name]) {
            throw new Error(`Cannot find path for "${name}" asset. Make sure you are compiling assets`);
        }
        return manifest[name];
    }
    /**
     * Returns the entrypoints contents as object
     */
    entryPoints() {
        /**
         * Use in-memory cache when exists
         */
        if (this.entrypointsCache) {
            this.application.logger.trace('reading encore entrypoints from cache');
            return this.entrypointsCache;
        }
        const entryPoints = this.readFileAsJSON((0, path_1.join)(this.publicPath, 'entrypoints.json'));
        this.application.logger.trace('reading encore entrypoints from %s', this.publicPath);
        /**
         * Cache entrypoints file in production to avoid re-reading the file from disk
         */
        if (this.application.inProduction) {
            this.entrypointsCache = entryPoints.entrypoints || {};
        }
        return entryPoints.entrypoints || {};
    }
    /**
     * Returns list for all the javascript files for a given entry point
     */
    entryPointJsFiles(name) {
        const entrypoints = this.entryPoints();
        if (!entrypoints[name]) {
            throw new Error(`Cannot find assets for "${name}" entrypoint. Make sure you are compiling assets`);
        }
        return entrypoints[name].js || [];
    }
    /**
     * Returns list for all the css files for a given entry point
     */
    entryPointCssFiles(name) {
        const entrypoints = this.entryPoints();
        if (!entrypoints[name]) {
            throw new Error(`Cannot find assets for "${name}" entrypoint. Make sure you are compiling assets`);
        }
        return entrypoints[name].css || [];
    }
}
exports.EncoreDriver = EncoreDriver;
