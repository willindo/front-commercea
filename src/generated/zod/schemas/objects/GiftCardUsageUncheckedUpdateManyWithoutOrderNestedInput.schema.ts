import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageCreateWithoutOrderInputObjectSchema as GiftCardUsageCreateWithoutOrderInputObjectSchema } from './GiftCardUsageCreateWithoutOrderInput.schema';
import { GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema as GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutOrderInput.schema';
import { GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema as GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema } from './GiftCardUsageCreateOrConnectWithoutOrderInput.schema';
import { GiftCardUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema as GiftCardUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema } from './GiftCardUsageUpsertWithWhereUniqueWithoutOrderInput.schema';
import { GiftCardUsageCreateManyOrderInputEnvelopeObjectSchema as GiftCardUsageCreateManyOrderInputEnvelopeObjectSchema } from './GiftCardUsageCreateManyOrderInputEnvelope.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema as GiftCardUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema } from './GiftCardUsageUpdateWithWhereUniqueWithoutOrderInput.schema';
import { GiftCardUsageUpdateManyWithWhereWithoutOrderInputObjectSchema as GiftCardUsageUpdateManyWithWhereWithoutOrderInputObjectSchema } from './GiftCardUsageUpdateManyWithWhereWithoutOrderInput.schema';
import { GiftCardUsageScalarWhereInputObjectSchema as GiftCardUsageScalarWhereInputObjectSchema } from './GiftCardUsageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageCreateWithoutOrderInputObjectSchema).array(), z.lazy(() => GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GiftCardUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GiftCardUsageCreateManyOrderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GiftCardUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GiftCardUsageUpdateManyWithWhereWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUpdateManyWithWhereWithoutOrderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema), z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInput>;
export const GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInputObjectZodSchema = makeSchema();
