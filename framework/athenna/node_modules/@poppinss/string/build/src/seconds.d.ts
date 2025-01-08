declare const _default: {
    /**
     * Formats seconds to pretty string output
     */
    format(seconds: number, long?: boolean): string;
    /**
     * Parse the time expression to seconds. If the unit value is a number, then
     * it will be returned as it is. Otherwise the string expression will be
     * converted to a number representing seconds.
     */
    parse(duration: string | number): number;
};
export default _default;
