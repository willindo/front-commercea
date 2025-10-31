import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCouponUsagesInputObjectSchema as UserCreateNestedOneWithoutCouponUsagesInputObjectSchema } from './UserCreateNestedOneWithoutCouponUsagesInput.schema';
import { OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema as OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema } from './OrderCreateNestedOneWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  usedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCouponUsagesInputObjectSchema),
  order: z.lazy(() => OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema).optional()
}).strict();
export const CouponUsageCreateWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateWithoutCouponInput>;
export const CouponUsageCreateWithoutCouponInputObjectZodSchema = makeSchema();
