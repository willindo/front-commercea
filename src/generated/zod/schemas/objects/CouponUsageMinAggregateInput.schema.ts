import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  couponId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  usedAt: z.literal(true).optional()
}).strict();
export const CouponUsageMinAggregateInputObjectSchema: z.ZodType<Prisma.CouponUsageMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageMinAggregateInputType>;
export const CouponUsageMinAggregateInputObjectZodSchema = makeSchema();
