declare const _default: {
    format(milliseconds: number, long?: boolean): string;
    /**
     * Parse time expression string to milliseconds. The number value
     * is returned as it is, considering it is already in milliseconds
     */
    parse(duration: string | number): number;
};
export default _default;
