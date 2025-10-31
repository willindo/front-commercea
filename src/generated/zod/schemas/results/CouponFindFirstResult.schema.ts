import * as z from 'zod';
export const CouponFindFirstResultSchema = z.nullable(z.object({
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
}));