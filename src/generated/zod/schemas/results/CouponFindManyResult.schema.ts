import * as z from 'zod';
export const CouponFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  code: z.string(),
  description: z.string().optional(),
  discountType: z.unknown(),
  discountValue: z.number(),
  minPurchase: z.number().optional(),
  maxDiscount: z.number().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  active: z.boolean(),
  usages: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
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