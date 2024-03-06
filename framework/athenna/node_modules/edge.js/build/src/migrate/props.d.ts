import { ComponentProps } from '../component/props.js';
/**
 * Class to ease interactions with component props
 */
export declare class Props {
    #private;
    /**
     * Use ".next" property to migrate to newer
     * api
     */
    next: ComponentProps;
    constructor(props: any);
    /**
     * Find if a key exists inside the props
     */
    has(key: string): boolean;
    /**
     * Get value for a given key
     */
    get(key: string, defaultValue?: any): any;
    /**
     * Returns all the props
     */
    all(): any;
    /**
     * Validate prop value
     */
    validate(key: string, validateFn: (key: string, value?: any) => any): void;
    /**
     * Return values for only the given keys
     */
    only(keys: string[]): any;
    /**
     * Return values except the given keys
     */
    except(keys: string[]): any;
    /**
     * Serialize all props to a string of HTML attributes
     */
    serialize(mergeProps?: any, prioritizeInline?: boolean): {
        value: any;
    };
    /**
     * Serialize only the given keys to a string of HTML attributes
     */
    serializeOnly(keys: string[], mergeProps?: any, prioritizeInline?: boolean): {
        value: any;
    };
    /**
     * Serialize except the given keys to a string of HTML attributes
     */
    serializeExcept(keys: string[], mergeProps?: any, prioritizeInline?: boolean): {
        value: any;
    };
}
