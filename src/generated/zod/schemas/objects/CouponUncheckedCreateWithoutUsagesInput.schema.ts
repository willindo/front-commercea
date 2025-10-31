import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountTypeSchema } from '../enums/DiscountType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  description: z.string().optional().nullable(),
  discountType: DiscountTypeSchema,
  discountValue: z.number(),
  minPurchase: z.number().optional().nullable(),
  maxDiscount: z.number().optional().nullable(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CouponUncheckedCreateWithoutUsagesInputObjectSchema: z.ZodType<Prisma.CouponUncheckedCreateWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUncheckedCreateWithoutUsagesInput>;
export const CouponUncheckedCreateWithoutUsagesInputObjectZodSchema = makeSchema();
