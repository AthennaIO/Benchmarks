import { BytesOptions } from 'bytes';
declare const _default: {
    /**
     * Formats bytes to pretty string output
     */
    format(valueInBytes: number, options?: BytesOptions): string | null;
    /**
     * Parse the unit expression to bytes. If the unit value is a number, then it
     * will be returned as it is. Otherwise the string expression will be
     * converted to a number representing bytes.
     */
    parse(unit: string | number): number | null;
};
export default _default;
