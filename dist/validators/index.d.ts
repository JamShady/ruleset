declare const _default: {
    required: (value: unknown) => boolean;
    min: (value: unknown, limit: number) => boolean;
    max: (value: unknown, limit: number) => boolean;
    gte: (value: unknown, limit: number) => boolean;
    lte: (value: unknown, limit: number) => boolean;
    pattern: (value: unknown, regex: string | RegExp) => boolean;
    match: (match: unknown, against: unknown) => boolean;
    differ: (differ: unknown, from: unknown) => boolean;
    differs: (differ: unknown, fromAll: unknown[]) => boolean;
    email: (value: unknown) => boolean;
    onOrAfter: (value: unknown, limit: string | number | Date) => boolean;
    onOrBefore: (value: unknown, limit: string | number | Date) => boolean;
};
export default _default;
