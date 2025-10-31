import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountTypeSchema } from '../enums/DiscountType.schema';
import { CouponUsageUncheckedCreateNestedManyWithoutCouponInputObjectSchema as CouponUsageUncheckedCreateNestedManyWithoutCouponInputObjectSchema } from './CouponUsageUncheckedCreateNestedManyWithoutCouponInput.schema'

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
  usages: z.lazy(() => CouponUsageUncheckedCreateNestedManyWithoutCouponInputObjectSchema)
}).strict();
export const CouponUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CouponUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUncheckedCreateInput>;
export const CouponUncheckedCreateInputObjectZodSchema = makeSchema();
