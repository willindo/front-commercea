import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateWithoutOrderInputObjectSchema as CouponUsageCreateWithoutOrderInputObjectSchema } from './CouponUsageCreateWithoutOrderInput.schema';
import { CouponUsageUncheckedCreateWithoutOrderInputObjectSchema as CouponUsageUncheckedCreateWithoutOrderInputObjectSchema } from './CouponUsageUncheckedCreateWithoutOrderInput.schema';
import { CouponUsageCreateOrConnectWithoutOrderInputObjectSchema as CouponUsageCreateOrConnectWithoutOrderInputObjectSchema } from './CouponUsageCreateOrConnectWithoutOrderInput.schema';
import { CouponUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema as CouponUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema } from './CouponUsageUpsertWithWhereUniqueWithoutOrderInput.schema';
import { CouponUsageCreateManyOrderInputEnvelopeObjectSchema as CouponUsageCreateManyOrderInputEnvelopeObjectSchema } from './CouponUsageCreateManyOrderInputEnvelope.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema as CouponUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema } from './CouponUsageUpdateWithWhereUniqueWithoutOrderInput.schema';
import { CouponUsageUpdateManyWithWhereWithoutOrderInputObjectSchema as CouponUsageUpdateManyWithWhereWithoutOrderInputObjectSchema } from './CouponUsageUpdateManyWithWhereWithoutOrderInput.schema';
import { CouponUsageScalarWhereInputObjectSchema as CouponUsageScalarWhereInputObjectSchema } from './CouponUsageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageCreateWithoutOrderInputObjectSchema).array(), z.lazy(() => CouponUsageUncheckedCreateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutOrderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CouponUsageCreateOrConnectWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageCreateOrConnectWithoutOrderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CouponUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CouponUsageCreateManyOrderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CouponUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CouponUsageUpdateManyWithWhereWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUpdateManyWithWhereWithoutOrderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CouponUsageScalarWhereInputObjectSchema), z.lazy(() => CouponUsageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CouponUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema: z.ZodType<Prisma.CouponUsageUncheckedUpdateManyWithoutOrderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUncheckedUpdateManyWithoutOrderNestedInput>;
export const CouponUsageUncheckedUpdateManyWithoutOrderNestedInputObjectZodSchema = makeSchema();
