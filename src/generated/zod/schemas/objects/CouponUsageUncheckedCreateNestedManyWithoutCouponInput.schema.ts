import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateWithoutCouponInputObjectSchema as CouponUsageCreateWithoutCouponInputObjectSchema } from './CouponUsageCreateWithoutCouponInput.schema';
import { CouponUsageUncheckedCreateWithoutCouponInputObjectSchema as CouponUsageUncheckedCreateWithoutCouponInputObjectSchema } from './CouponUsageUncheckedCreateWithoutCouponInput.schema';
import { CouponUsageCreateOrConnectWithoutCouponInputObjectSchema as CouponUsageCreateOrConnectWithoutCouponInputObjectSchema } from './CouponUsageCreateOrConnectWithoutCouponInput.schema';
import { CouponUsageCreateManyCouponInputEnvelopeObjectSchema as CouponUsageCreateManyCouponInputEnvelopeObjectSchema } from './CouponUsageCreateManyCouponInputEnvelope.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponUsageCreateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageCreateWithoutCouponInputObjectSchema).array(), z.lazy(() => CouponUsageUncheckedCreateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutCouponInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CouponUsageCreateOrConnectWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageCreateOrConnectWithoutCouponInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CouponUsageCreateManyCouponInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CouponUsageUncheckedCreateNestedManyWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageUncheckedCreateNestedManyWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUncheckedCreateNestedManyWithoutCouponInput>;
export const CouponUsageUncheckedCreateNestedManyWithoutCouponInputObjectZodSchema = makeSchema();
