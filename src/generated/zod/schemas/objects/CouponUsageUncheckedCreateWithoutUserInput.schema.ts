import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  couponId: z.string(),
  orderId: z.string().optional().nullable(),
  usedAt: z.coerce.date().optional()
}).strict();
export const CouponUsageUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CouponUsageUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUncheckedCreateWithoutUserInput>;
export const CouponUsageUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
