import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithoutCouponInputObjectSchema as CouponUsageUpdateWithoutCouponInputObjectSchema } from './CouponUsageUpdateWithoutCouponInput.schema';
import { CouponUsageUncheckedUpdateWithoutCouponInputObjectSchema as CouponUsageUncheckedUpdateWithoutCouponInputObjectSchema } from './CouponUsageUncheckedUpdateWithoutCouponInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CouponUsageUpdateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateWithoutCouponInputObjectSchema)])
}).strict();
export const CouponUsageUpdateWithWhereUniqueWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateWithWhereUniqueWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateWithWhereUniqueWithoutCouponInput>;
export const CouponUsageUpdateWithWhereUniqueWithoutCouponInputObjectZodSchema = makeSchema();
