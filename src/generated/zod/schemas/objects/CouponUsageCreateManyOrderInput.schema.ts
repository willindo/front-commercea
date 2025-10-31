import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  couponId: z.string(),
  userId: z.string(),
  usedAt: z.coerce.date().optional()
}).strict();
export const CouponUsageCreateManyOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateManyOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateManyOrderInput>;
export const CouponUsageCreateManyOrderInputObjectZodSchema = makeSchema();
