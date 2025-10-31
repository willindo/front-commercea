import * as z from 'zod';

// prettier-ignore
export const GiftCardModelSchema = z.object({
    id: z.string(),
    code: z.string(),
    userId: z.string().nullable(),
    balance: z.number(),
    isActive: z.boolean(),
    issuedBy: z.string().nullable(),
    createdAt: z.date(),
    expiresAt: z.date().nullable(),
    user: z.unknown().nullable(),
    usages: z.array(z.unknown())
}).strict();

export type GiftCardPureType = z.infer<typeof GiftCardModelSchema>;
