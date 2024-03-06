/**
 * Dynamically import a module and ensure it has a default export
 */
export declare function importDefault<T extends object>(importFn: () => Promise<T>, filePath?: string): Promise<T extends {
    default: infer A;
} ? A : never>;
