import * as z from 'zod';
export const GiftCardUsageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  giftCardId: z.string(),
  orderId: z.string(),
  amountUsed: z.number(),
  usedAt: z.date(),
  _count: z.object({
    id: z.number(),
    giftCardId: z.number(),
    orderId: z.number(),
    amountUsed: z.number(),
    usedAt: z.number(),
    giftCard: z.number(),
    order: z.number()
  }).optional(),
  _sum: z.object({
    amountUsed: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amountUsed: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    giftCardId: z.string().nullable(),
    orderId: z.string().nullable(),
    amountUsed: z.number().nullable(),
    usedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    giftCardId: z.string().nullable(),
    orderId: z.string().nullable(),
    amountUsed: z.number().nullable(),
    usedAt: z.date().nullable()
  }).nullable().optional()
}));