declare const _default: {
    format(seconds: number, long?: boolean): string;
    /**
     * Parse time expression string to seconds. The number value
     * is returned as it is, considering it is already in seconds
     */
    parse(duration: string | number): number;
};
export default _default;
