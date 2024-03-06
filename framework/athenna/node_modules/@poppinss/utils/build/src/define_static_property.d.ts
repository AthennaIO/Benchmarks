type Constructor = new (...args: any[]) => any;
type AbstractConstructor = abstract new (...args: any[]) => any;
/**
 * Define static properties on a class with inheritance in play.
 */
export declare function defineStaticProperty<T extends Constructor | AbstractConstructor, Prop extends keyof T>(self: T, propertyName: Prop, { initialValue, strategy, }: {
    initialValue: T[Prop];
    strategy: 'inherit' | 'define' | ((value: T[Prop]) => T[Prop]);
}): void;
export {};
