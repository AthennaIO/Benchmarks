type PickKeysByValue<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
type OmitProperties<T, P> = Omit<T, PickKeysByValue<T, P>>;
/**
 * A simple class to build an object incrementally. It is helpful when you
 * want to add properties to the object conditionally.
 *
 * Instead of writing
 * ```
 * const obj = {
 *   ...(user.id ? { id: user.id } : {}),
 *   ...(user.firstName && user.lastName ? { name: `${user.firstName} ${user.lastName}` } : {}),
 * }
 * ```
 *
 * You can write
 *
 * const obj = new ObjectBuilder()
 *   .add('id', user.id)
 *   .add(
 *     'fullName',
 *     user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : undefined
 *   )
 *   .toObject()
 */
export declare class ObjectBuilder<ReturnType extends Record<string, any>, IgnoreNull extends boolean = false> {
    #private;
    values: ReturnType;
    constructor(initialValue: ReturnType, ignoreNull?: IgnoreNull);
    /**
     * Add a key-value pair to the object
     *
     * - Undefined values are ignored
     * - Null values are ignored, when `ignoreNull` is set to true
     */
    add<Prop extends string>(key: Prop, value: undefined): this;
    add<Prop extends string, Value>(key: Prop, value: Value): ObjectBuilder<ReturnType & {
        [P in Prop]: Value;
    }, IgnoreNull>;
    /**
     * Remove key from the object
     */
    remove<K extends keyof ReturnType>(key: K): this;
    /**
     * Find if a value exists
     */
    has<K extends keyof ReturnType>(key: K): boolean;
    /**
     * Get the existing value for a given key
     */
    get<K extends keyof ReturnType>(key: K): ReturnType[K];
    /**
     * Get the underlying constructed object
     */
    toObject(): IgnoreNull extends true ? {
        [K in keyof OmitProperties<ReturnType, null>]: ReturnType[K];
    } : {
        [K in keyof ReturnType]: ReturnType[K];
    };
}
export {};
