import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageCreateWithoutCouponInputObjectSchema as CouponUsageCreateWithoutCouponInputObjectSchema } from './CouponUsageCreateWithoutCouponInput.schema';
import { CouponUsageUncheckedCreateWithoutCouponInputObjectSchema as CouponUsageUncheckedCreateWithoutCouponInputObjectSchema } from './CouponUsageUncheckedCreateWithoutCouponInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CouponUsageCreateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutCouponInputObjectSchema)])
}).strict();
export const CouponUsageCreateOrConnectWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateOrConnectWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateOrConnectWithoutCouponInput>;
export const CouponUsageCreateOrConnectWithoutCouponInputObjectZodSchema = makeSchema();
