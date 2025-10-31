import * as z from 'zod';
export const CouponUsageAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    coupon: z.number(),
    couponId: z.number(),
    user: z.number(),
    userId: z.number(),
    order: z.number(),
    orderId: z.number(),
    usedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    couponId: z.string().nullable(),
    userId: z.string().nullable(),
    orderId: z.string().nullable(),
    usedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    couponId: z.string().nullable(),
    userId: z.string().nullable(),
    orderId: z.string().nullable(),
    usedAt: z.date().nullable()
  }).nullable().optional()});