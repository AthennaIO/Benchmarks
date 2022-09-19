import { ApplicationContract } from '@ioc:Adonis/Core/Application';
import { AssetsDriverContract } from '@ioc:Adonis/Core/AssetsManager';
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
export declare class EncoreDriver implements AssetsDriverContract {
    private application;
    /**
     * We cache the manifest contents and the entrypoints contents
     * in production
     */
    private manifestCache?;
    private entrypointsCache?;
    name: string;
    /**
     * Encore driver has support for entrypoints
     */
    hasEntrypoints: boolean;
    /**
     * Path to the output public dir. Defaults to `/public/assets`
     */
    publicPath: string;
    /**
     * Returns the version of the assets by hashing the manifest file
     * contents
     */
    get version(): string;
    constructor(application: ApplicationContract);
    /**
     * Reads the file contents as JSON
     */
    private readFileAsJSON;
    /**
     * Returns the manifest contents as object
     */
    manifest(): any;
    /**
     * Returns path to a given asset file
     */
    assetPath(name: string): string;
    /**
     * Returns the entrypoints contents as object
     */
    entryPoints(): any;
    /**
     * Returns list for all the javascript files for a given entry point
     */
    entryPointJsFiles(name: string): string[];
    /**
     * Returns list for all the css files for a given entry point
     */
    entryPointCssFiles(name: string): string[];
}
