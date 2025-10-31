import * as z from 'zod';

// prettier-ignore
export const GiftCardUsageInputSchema = z.object({
    id: z.string(),
    giftCardId: z.string(),
    orderId: z.string().optional().nullable(),
    amountUsed: z.number(),
    usedAt: z.date(),
    giftCard: z.unknown(),
    order: z.unknown().optional().nullable()
}).strict();

export type GiftCardUsageInputType = z.infer<typeof GiftCardUsageInputSchema>;
