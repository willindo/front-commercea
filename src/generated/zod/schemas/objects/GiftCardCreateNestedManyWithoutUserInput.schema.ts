import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCreateWithoutUserInputObjectSchema as GiftCardCreateWithoutUserInputObjectSchema } from './GiftCardCreateWithoutUserInput.schema';
import { GiftCardUncheckedCreateWithoutUserInputObjectSchema as GiftCardUncheckedCreateWithoutUserInputObjectSchema } from './GiftCardUncheckedCreateWithoutUserInput.schema';
import { GiftCardCreateOrConnectWithoutUserInputObjectSchema as GiftCardCreateOrConnectWithoutUserInputObjectSchema } from './GiftCardCreateOrConnectWithoutUserInput.schema';
import { GiftCardCreateManyUserInputEnvelopeObjectSchema as GiftCardCreateManyUserInputEnvelopeObjectSchema } from './GiftCardCreateManyUserInputEnvelope.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardCreateWithoutUserInputObjectSchema), z.lazy(() => GiftCardCreateWithoutUserInputObjectSchema).array(), z.lazy(() => GiftCardUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GiftCardCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => GiftCardCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GiftCardCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GiftCardWhereUniqueInputObjectSchema), z.lazy(() => GiftCardWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GiftCardCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.GiftCardCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateNestedManyWithoutUserInput>;
export const GiftCardCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
