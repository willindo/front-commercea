import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageCreateWithoutGiftCardInputObjectSchema as GiftCardUsageCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageCreateWithoutGiftCardInput.schema';
import { GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutGiftCardInput.schema';
import { GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema as GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema } from './GiftCardUsageCreateOrConnectWithoutGiftCardInput.schema';
import { GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInputObjectSchema as GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInputObjectSchema } from './GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInput.schema';
import { GiftCardUsageCreateManyGiftCardInputEnvelopeObjectSchema as GiftCardUsageCreateManyGiftCardInputEnvelopeObjectSchema } from './GiftCardUsageCreateManyGiftCardInputEnvelope.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInputObjectSchema as GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInputObjectSchema } from './GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInput.schema';
import { GiftCardUsageUpdateManyWithWhereWithoutGiftCardInputObjectSchema as GiftCardUsageUpdateManyWithWhereWithoutGiftCardInputObjectSchema } from './GiftCardUsageUpdateManyWithWhereWithoutGiftCardInput.schema';
import { GiftCardUsageScalarWhereInputObjectSchema as GiftCardUsageScalarWhereInputObjectSchema } from './GiftCardUsageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageCreateWithoutGiftCardInputObjectSchema).array(), z.lazy(() => GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GiftCardUsageCreateManyGiftCardInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GiftCardUsageUpdateManyWithWhereWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUpdateManyWithWhereWithoutGiftCardInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema), z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GiftCardUsageUncheckedUpdateManyWithoutGiftCardNestedInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUncheckedUpdateManyWithoutGiftCardNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUncheckedUpdateManyWithoutGiftCardNestedInput>;
export const GiftCardUsageUncheckedUpdateManyWithoutGiftCardNestedInputObjectZodSchema = makeSchema();
