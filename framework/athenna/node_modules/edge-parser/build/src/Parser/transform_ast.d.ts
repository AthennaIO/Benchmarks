import { Parser } from './main.js';
/**
 * Transform acorn AST to Edge AST. This must always be performed before
 * writing it to the compiled template buffer.
 */
export declare function transformAst(astExpression: any, filename: string, parser: Parser): any;
