import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithoutCouponInputObjectSchema as CouponUsageUpdateWithoutCouponInputObjectSchema } from './CouponUsageUpdateWithoutCouponInput.schema';
import { CouponUsageUncheckedUpdateWithoutCouponInputObjectSchema as CouponUsageUncheckedUpdateWithoutCouponInputObjectSchema } from './CouponUsageUncheckedUpdateWithoutCouponInput.schema';
import { CouponUsageCreateWithoutCouponInputObjectSchema as CouponUsageCreateWithoutCouponInputObjectSchema } from './CouponUsageCreateWithoutCouponInput.schema';
import { CouponUsageUncheckedCreateWithoutCouponInputObjectSchema as CouponUsageUncheckedCreateWithoutCouponInputObjectSchema } from './CouponUsageUncheckedCreateWithoutCouponInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CouponUsageUpdateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateWithoutCouponInputObjectSchema)]),
  create: z.union([z.lazy(() => CouponUsageCreateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutCouponInputObjectSchema)])
}).strict();
export const CouponUsageUpsertWithWhereUniqueWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageUpsertWithWhereUniqueWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpsertWithWhereUniqueWithoutCouponInput>;
export const CouponUsageUpsertWithWhereUniqueWithoutCouponInputObjectZodSchema = makeSchema();
