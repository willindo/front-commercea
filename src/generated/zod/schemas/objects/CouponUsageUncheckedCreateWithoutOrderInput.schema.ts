import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  couponId: z.string(),
  userId: z.string(),
  usedAt: z.coerce.date().optional()
}).strict();
export const CouponUsageUncheckedCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageUncheckedCreateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUncheckedCreateWithoutOrderInput>;
export const CouponUsageUncheckedCreateWithoutOrderInputObjectZodSchema = makeSchema();
