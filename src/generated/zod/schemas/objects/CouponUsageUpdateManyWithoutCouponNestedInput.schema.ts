import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateWithoutCouponInputObjectSchema as CouponUsageCreateWithoutCouponInputObjectSchema } from './CouponUsageCreateWithoutCouponInput.schema';
import { CouponUsageUncheckedCreateWithoutCouponInputObjectSchema as CouponUsageUncheckedCreateWithoutCouponInputObjectSchema } from './CouponUsageUncheckedCreateWithoutCouponInput.schema';
import { CouponUsageCreateOrConnectWithoutCouponInputObjectSchema as CouponUsageCreateOrConnectWithoutCouponInputObjectSchema } from './CouponUsageCreateOrConnectWithoutCouponInput.schema';
import { CouponUsageUpsertWithWhereUniqueWithoutCouponInputObjectSchema as CouponUsageUpsertWithWhereUniqueWithoutCouponInputObjectSchema } from './CouponUsageUpsertWithWhereUniqueWithoutCouponInput.schema';
import { CouponUsageCreateManyCouponInputEnvelopeObjectSchema as CouponUsageCreateManyCouponInputEnvelopeObjectSchema } from './CouponUsageCreateManyCouponInputEnvelope.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithWhereUniqueWithoutCouponInputObjectSchema as CouponUsageUpdateWithWhereUniqueWithoutCouponInputObjectSchema } from './CouponUsageUpdateWithWhereUniqueWithoutCouponInput.schema';
import { CouponUsageUpdateManyWithWhereWithoutCouponInputObjectSchema as CouponUsageUpdateManyWithWhereWithoutCouponInputObjectSchema } from './CouponUsageUpdateManyWithWhereWithoutCouponInput.schema';
import { CouponUsageScalarWhereInputObjectSchema as CouponUsageScalarWhereInputObjectSchema } from './CouponUsageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponUsageCreateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageCreateWithoutCouponInputObjectSchema).array(), z.lazy(() => CouponUsageUncheckedCreateWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutCouponInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CouponUsageCreateOrConnectWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageCreateOrConnectWithoutCouponInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CouponUsageUpsertWithWhereUniqueWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUpsertWithWhereUniqueWithoutCouponInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CouponUsageCreateManyCouponInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CouponUsageUpdateWithWhereUniqueWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUpdateWithWhereUniqueWithoutCouponInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CouponUsageUpdateManyWithWhereWithoutCouponInputObjectSchema), z.lazy(() => CouponUsageUpdateManyWithWhereWithoutCouponInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CouponUsageScalarWhereInputObjectSchema), z.lazy(() => CouponUsageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CouponUsageUpdateManyWithoutCouponNestedInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateManyWithoutCouponNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateManyWithoutCouponNestedInput>;
export const CouponUsageUpdateManyWithoutCouponNestedInputObjectZodSchema = makeSchema();
