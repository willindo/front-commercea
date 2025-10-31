import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  couponId: z.string(),
  userId: z.string(),
  orderId: z.string().optional().nullable(),
  usedAt: z.coerce.date().optional()
}).strict();
export const CouponUsageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CouponUsageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUncheckedCreateInput>;
export const CouponUsageUncheckedCreateInputObjectZodSchema = makeSchema();
