import * as z from 'zod';
export const CouponGroupByResultSchema = z.array(z.object({
  id: z.string(),
  code: z.string(),
  description: z.string(),
  discountValue: z.number(),
  minPurchase: z.number(),
  maxDiscount: z.number(),
  startDate: z.date(),
  endDate: z.date(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    code: z.number(),
    description: z.number(),
    discountType: z.number(),
    discountValue: z.number(),
    minPurchase: z.number(),
    maxDiscount: z.number(),
    startDate: z.number(),
    endDate: z.number(),
    active: z.number(),
    usages: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    discountValue: z.number().nullable(),
    minPurchase: z.number().nullable(),
    maxDiscount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    discountValue: z.number().nullable(),
    minPurchase: z.number().nullable(),
    maxDiscount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    description: z.string().nullable(),
    discountValue: z.number().nullable(),
    minPurchase: z.number().nullable(),
    maxDiscount: z.number().nullable(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    description: z.string().nullable(),
    discountValue: z.number().nullable(),
    minPurchase: z.number().nullable(),
    maxDiscount: z.number().nullable(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));