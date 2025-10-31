import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponCreateNestedOneWithoutUsagesInputObjectSchema as CouponCreateNestedOneWithoutUsagesInputObjectSchema } from './CouponCreateNestedOneWithoutUsagesInput.schema';
import { OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema as OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema } from './OrderCreateNestedOneWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  usedAt: z.coerce.date().optional(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutUsagesInputObjectSchema),
  order: z.lazy(() => OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema).optional()
}).strict();
export const CouponUsageCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateWithoutUserInput>;
export const CouponUsageCreateWithoutUserInputObjectZodSchema = makeSchema();
