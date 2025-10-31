import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponCreateNestedOneWithoutUsagesInputObjectSchema as CouponCreateNestedOneWithoutUsagesInputObjectSchema } from './CouponCreateNestedOneWithoutUsagesInput.schema';
import { UserCreateNestedOneWithoutCouponUsagesInputObjectSchema as UserCreateNestedOneWithoutCouponUsagesInputObjectSchema } from './UserCreateNestedOneWithoutCouponUsagesInput.schema';
import { OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema as OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema } from './OrderCreateNestedOneWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  usedAt: z.coerce.date().optional(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutUsagesInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCouponUsagesInputObjectSchema),
  order: z.lazy(() => OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema).optional()
}).strict();
export const CouponUsageCreateInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateInput>;
export const CouponUsageCreateInputObjectZodSchema = makeSchema();
