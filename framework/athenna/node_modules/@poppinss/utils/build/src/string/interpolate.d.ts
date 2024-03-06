/**
 * A simple function interpolate values inside curly braces.
 *
 * ```
 * interpolate('hello {{ username }}', { username: 'virk' })
 * ```
 */
export declare function interpolate(input: string, data: any): string;
