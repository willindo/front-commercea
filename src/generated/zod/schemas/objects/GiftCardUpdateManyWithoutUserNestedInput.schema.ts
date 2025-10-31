import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCreateWithoutUserInputObjectSchema as GiftCardCreateWithoutUserInputObjectSchema } from './GiftCardCreateWithoutUserInput.schema';
import { GiftCardUncheckedCreateWithoutUserInputObjectSchema as GiftCardUncheckedCreateWithoutUserInputObjectSchema } from './GiftCardUncheckedCreateWithoutUserInput.schema';
import { GiftCardCreateOrConnectWithoutUserInputObjectSchema as GiftCardCreateOrConnectWithoutUserInputObjectSchema } from './GiftCardCreateOrConnectWithoutUserInput.schema';
import { GiftCardUpsertWithWhereUniqueWithoutUserInputObjectSchema as GiftCardUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './GiftCardUpsertWithWhereUniqueWithoutUserInput.schema';
import { GiftCardCreateManyUserInputEnvelopeObjectSchema as GiftCardCreateManyUserInputEnvelopeObjectSchema } from './GiftCardCreateManyUserInputEnvelope.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema';
import { GiftCardUpdateWithWhereUniqueWithoutUserInputObjectSchema as GiftCardUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './GiftCardUpdateWithWhereUniqueWithoutUserInput.schema';
import { GiftCardUpdateManyWithWhereWithoutUserInputObjectSchema as GiftCardUpdateManyWithWhereWithoutUserInputObjectSchema } from './GiftCardUpdateManyWithWhereWithoutUserInput.schema';
import { GiftCardScalarWhereInputObjectSchema as GiftCardScalarWhereInputObjectSchema } from './GiftCardScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardCreateWithoutUserInputObjectSchema), z.lazy(() => GiftCardCreateWithoutUserInputObjectSchema).array(), z.lazy(() => GiftCardUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GiftCardCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => GiftCardCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GiftCardUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => GiftCardUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GiftCardCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GiftCardWhereUniqueInputObjectSchema), z.lazy(() => GiftCardWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GiftCardWhereUniqueInputObjectSchema), z.lazy(() => GiftCardWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GiftCardWhereUniqueInputObjectSchema), z.lazy(() => GiftCardWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GiftCardWhereUniqueInputObjectSchema), z.lazy(() => GiftCardWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GiftCardUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => GiftCardUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GiftCardUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => GiftCardUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GiftCardScalarWhereInputObjectSchema), z.lazy(() => GiftCardScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GiftCardUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.GiftCardUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUpdateManyWithoutUserNestedInput>;
export const GiftCardUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
