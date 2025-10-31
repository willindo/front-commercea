import * as z from 'zod';
export const CouponUsageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  coupon: z.unknown(),
  couponId: z.string(),
  user: z.unknown(),
  userId: z.string(),
  order: z.unknown().optional(),
  orderId: z.string().optional(),
  usedAt: z.date()
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