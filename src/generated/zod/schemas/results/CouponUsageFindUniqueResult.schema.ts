import * as z from 'zod';
export const CouponUsageFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  coupon: z.unknown(),
  couponId: z.string(),
  user: z.unknown(),
  userId: z.string(),
  order: z.unknown().optional(),
  orderId: z.string().optional(),
  usedAt: z.date()
}));