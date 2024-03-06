import { Processor } from '../processor.js';
import type { Compiler } from '../compiler.js';
/**
 * Renders a given template with it's shared state
 */
export declare class EdgeRenderer {
    #private;
    constructor(compiler: Compiler, asyncCompiler: Compiler, processor: Processor, globals: Record<string, any>);
    /**
     * Share local variables with the template. They will overwrite the
     * globals
     */
    share(data: Record<string, any>): this;
    /**
     * Render the template
     */
    render(templatePath: string, state?: Record<string, any>): Promise<string>;
    /**
     * Render the template
     */
    renderSync(templatePath: string, state?: Record<string, any>): string;
    /**
     * Render the template from a raw string
     */
    renderRaw(contents: string, state?: Record<string, any>, templatePath?: string): Promise<string>;
    /**
     * Render the template from a raw string
     */
    renderRawSync(contents: string, state?: Record<string, any>, templatePath?: string): string;
}
