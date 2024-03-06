/**
 * Representation of component props with ability to serialize
 * them into HTML attributes
 */
export declare class ComponentProps {
    #private;
    constructor(values: Record<string, any>);
    /**
     * Create a typed instance of Component props with properties
     */
    static create<T extends Record<string, any>>(values: T): ComponentProps & T;
    /**
     * Reference to props raw values
     */
    all(): Record<string, any>;
    /**
     * Check if a key exists
     */
    has(key: string): boolean;
    /**
     * Get key value
     */
    get(key: string, defaultValue?: any): any;
    /**
     * Returns a new props bag with only the mentioned keys
     */
    only(keys: string[]): ComponentProps;
    /**
     * Returns a new props bag with except the mentioned keys
     */
    except(keys: string[]): ComponentProps;
    /**
     * Merge defaults with the props
     *
     * - All other attributes will be overwritten when defined in props
     * - Classes will be merged together.
     */
    merge(values: Record<string, any>): ComponentProps;
    /**
     * Merge defaults with the props, if the given condition is truthy
     */
    mergeIf(conditional: any, values: Record<string, any>): ComponentProps;
    /**
     * Merge defaults with the props, if the given condition is falsy
     */
    mergeUnless(conditional: any, values: Record<string, any>): ComponentProps;
    /**
     * Converts props to HTML attributes
     */
    toAttrs(): {
        value: any;
    };
}
