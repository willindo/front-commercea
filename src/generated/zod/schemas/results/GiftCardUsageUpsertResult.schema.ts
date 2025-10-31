import * as z from 'zod';
export const GiftCardUsageUpsertResultSchema = z.object({
  id: z.string(),
  giftCardId: z.string(),
  orderId: z.string().optional(),
  amountUsed: z.number(),
  usedAt: z.date(),
  giftCard: z.unknown(),
  order: z.unknown().optional()
});