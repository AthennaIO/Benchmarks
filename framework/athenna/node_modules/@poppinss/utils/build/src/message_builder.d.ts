/**
 * Message builder exposes an API to "JSON.stringify" values by
 * encoding purpose and expiry date inside them.
 *
 * The return value must be further encrypted to prevent tempering.
 */
export declare class MessageBuilder {
    #private;
    /**
     * Builds a message by encoding expiry date and purpose inside it.
     */
    build(message: any, expiresIn?: string | number, purpose?: string): string;
    /**
     * Verifies the message for expiry and purpose.
     */
    verify<T extends any>(message: any, purpose?: string): null | T;
}
