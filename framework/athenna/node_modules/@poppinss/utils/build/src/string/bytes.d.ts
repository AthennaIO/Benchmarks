import { BytesOptions } from 'bytes';
declare const _default: {
    format(valueInBytes: number, options?: BytesOptions): string;
    /**
     * Parse the unit expression to bytes. If the unit value
     * is a number, then it will be returned as it is considering
     * it is already in bytes.
     */
    parse(unit: string | number): number;
};
export default _default;
