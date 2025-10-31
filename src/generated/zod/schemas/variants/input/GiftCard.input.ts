import * as z from 'zod';

// prettier-ignore
export const GiftCardInputSchema = z.object({
    id: z.string(),
    code: z.string(),
    userId: z.string().optional().nullable(),
    balance: z.number(),
    isActive: z.boolean(),
    issuedBy: z.string().optional().nullable(),
    createdAt: z.date(),
    expiresAt: z.date().optional().nullable(),
    user: z.unknown().optional().nullable(),
    usages: z.array(z.unknown())
}).strict();

export type GiftCardInputType = z.infer<typeof GiftCardInputSchema>;
