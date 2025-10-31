import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  discountValue: z.literal(true).optional(),
  minPurchase: z.literal(true).optional(),
  maxDiscount: z.literal(true).optional()
}).strict();
export const CouponAvgAggregateInputObjectSchema: z.ZodType<Prisma.CouponAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CouponAvgAggregateInputType>;
export const CouponAvgAggregateInputObjectZodSchema = makeSchema();
