import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  description: z.literal(true).optional(),
  discountType: z.literal(true).optional(),
  discountValue: z.literal(true).optional(),
  minPurchase: z.literal(true).optional(),
  maxDiscount: z.literal(true).optional(),
  startDate: z.literal(true).optional(),
  endDate: z.literal(true).optional(),
  active: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CouponMaxAggregateInputObjectSchema: z.ZodType<Prisma.CouponMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CouponMaxAggregateInputType>;
export const CouponMaxAggregateInputObjectZodSchema = makeSchema();
