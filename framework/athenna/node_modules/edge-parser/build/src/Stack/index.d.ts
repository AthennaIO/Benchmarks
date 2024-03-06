/**
 * Stack exposes the API to define variables and scopes. This is used by the parser
 * to decide the syntax for resolving variables.
 */
export declare class Stack {
    #private;
    /**
     * Define a new custom scope
     */
    defineScope(): void;
    /**
     * Clear recently created scope
     */
    clearScope(): void;
    /**
     * Define variable inside the stack.
     */
    defineVariable(variableName: string): void;
    /**
     * Returns a boolean telling if a variable is defined inside
     * the stack
     */
    has(variableName: string): boolean;
    /**
     * Returns the state tree for the stack
     */
    getState(): {
        localVariables: string[];
        scopes: string[][];
    };
    /**
     * Returns a flat list of defined variables
     */
    list(): string[];
}
