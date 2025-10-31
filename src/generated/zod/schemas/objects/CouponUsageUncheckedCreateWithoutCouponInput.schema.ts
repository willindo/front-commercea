import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  orderId: z.string().optional().nullable(),
  usedAt: z.coerce.date().optional()
}).strict();
export const CouponUsageUncheckedCreateWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageUncheckedCreateWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUncheckedCreateWithoutCouponInput>;
export const CouponUsageUncheckedCreateWithoutCouponInputObjectZodSchema = makeSchema();
