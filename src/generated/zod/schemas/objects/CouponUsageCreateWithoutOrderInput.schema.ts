import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponCreateNestedOneWithoutUsagesInputObjectSchema as CouponCreateNestedOneWithoutUsagesInputObjectSchema } from './CouponCreateNestedOneWithoutUsagesInput.schema';
import { UserCreateNestedOneWithoutCouponUsagesInputObjectSchema as UserCreateNestedOneWithoutCouponUsagesInputObjectSchema } from './UserCreateNestedOneWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  usedAt: z.coerce.date().optional(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutUsagesInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCouponUsagesInputObjectSchema)
}).strict();
export const CouponUsageCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateWithoutOrderInput>;
export const CouponUsageCreateWithoutOrderInputObjectZodSchema = makeSchema();
