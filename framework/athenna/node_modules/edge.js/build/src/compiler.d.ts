import { Parser } from 'edge-parser';
import type { Token } from 'edge-lexer/types';
import { Processor } from './processor.js';
import { CacheManager } from './cache_manager.js';
import type { ClaimTagFn, TagsContract, LoaderContract, CompilerOptions, CompiledTemplate } from './types.js';
/**
 * Compiler is to used to compile templates using the `edge-parser`. Along with that
 * it natively merges the contents of a layout with a parent template.
 */
export declare class Compiler {
    #private;
    /**
     * Caches compiled templates
     */
    cacheManager: CacheManager;
    /**
     * A boolean to know if compat mode is enabled
     */
    compat: boolean;
    /**
     * Know if compiler is compiling in the async mode or not
     */
    async: boolean;
    constructor(loader: LoaderContract, tags: TagsContract, processor: Processor, options?: CompilerOptions);
    /**
     * Define a function to claim tags
     */
    claimTag(fn: ClaimTagFn): this;
    /**
     * Converts the template content to an array of lexer tokens. The method is
     * same as the `parser.tokenize`, but it also handles layouts natively.
     *
     * ```
     * compiler.tokenize('<template-path>')
     * ```
     */
    tokenize(templatePath: string, parser?: Parser): Token[];
    /**
     * Tokenize a raw template
     */
    tokenizeRaw(contents: string, templatePath?: string, parser?: Parser): Token[];
    /**
     * Compiles the template contents to string. The output is same as the `edge-parser`,
     * it's just that the compiler uses the loader to load the templates and also
     * handles layouts.
     *
     * ```js
     * compiler.compile('welcome')
     * ```
     */
    compile(templatePath: string, localVariables?: string[]): CompiledTemplate;
    /**
     * Compiles the template contents to string. The output is same as the `edge-parser`,
     * it's just that the compiler uses the loader to load the templates and also
     * handles layouts.
     *
     * ```js
     * compiler.compileRaw('welcome')
     * ```
     */
    compileRaw(contents: string, templatePath?: string): CompiledTemplate;
}
