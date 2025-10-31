import * as z from 'zod';
export const GiftCardUsageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  giftCardId: z.string(),
  orderId: z.string().optional(),
  amountUsed: z.number(),
  usedAt: z.date(),
  giftCard: z.unknown(),
  order: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});