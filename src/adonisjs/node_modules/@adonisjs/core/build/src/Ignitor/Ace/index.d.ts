/**
 * Exposes the API to execute ace commands.
 */
export declare class Ace {
    private appRoot;
    constructor(appRoot: string);
    /**
     * Handles the ace command
     */
    handle(argv: string[]): Promise<void>;
}
