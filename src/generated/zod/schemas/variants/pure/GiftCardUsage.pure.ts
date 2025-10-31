import * as z from 'zod';

// prettier-ignore
export const GiftCardUsageModelSchema = z.object({
    id: z.string(),
    giftCardId: z.string(),
    orderId: z.string().nullable(),
    amountUsed: z.number(),
    usedAt: z.date(),
    giftCard: z.unknown(),
    order: z.unknown().nullable()
}).strict();

export type GiftCardUsagePureType = z.infer<typeof GiftCardUsageModelSchema>;
