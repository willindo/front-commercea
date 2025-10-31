import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateWithoutUserInputObjectSchema as CouponUsageCreateWithoutUserInputObjectSchema } from './CouponUsageCreateWithoutUserInput.schema';
import { CouponUsageUncheckedCreateWithoutUserInputObjectSchema as CouponUsageUncheckedCreateWithoutUserInputObjectSchema } from './CouponUsageUncheckedCreateWithoutUserInput.schema';
import { CouponUsageCreateOrConnectWithoutUserInputObjectSchema as CouponUsageCreateOrConnectWithoutUserInputObjectSchema } from './CouponUsageCreateOrConnectWithoutUserInput.schema';
import { CouponUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema as CouponUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CouponUsageUpsertWithWhereUniqueWithoutUserInput.schema';
import { CouponUsageCreateManyUserInputEnvelopeObjectSchema as CouponUsageCreateManyUserInputEnvelopeObjectSchema } from './CouponUsageCreateManyUserInputEnvelope.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema as CouponUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CouponUsageUpdateWithWhereUniqueWithoutUserInput.schema';
import { CouponUsageUpdateManyWithWhereWithoutUserInputObjectSchema as CouponUsageUpdateManyWithWhereWithoutUserInputObjectSchema } from './CouponUsageUpdateManyWithWhereWithoutUserInput.schema';
import { CouponUsageScalarWhereInputObjectSchema as CouponUsageScalarWhereInputObjectSchema } from './CouponUsageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponUsageCreateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CouponUsageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CouponUsageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CouponUsageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CouponUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CouponUsageCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CouponUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CouponUsageUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CouponUsageScalarWhereInputObjectSchema), z.lazy(() => CouponUsageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CouponUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CouponUsageUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUncheckedUpdateManyWithoutUserNestedInput>;
export const CouponUsageUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
