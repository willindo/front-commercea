import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema';
import { GiftCardUpdateWithoutUserInputObjectSchema as GiftCardUpdateWithoutUserInputObjectSchema } from './GiftCardUpdateWithoutUserInput.schema';
import { GiftCardUncheckedUpdateWithoutUserInputObjectSchema as GiftCardUncheckedUpdateWithoutUserInputObjectSchema } from './GiftCardUncheckedUpdateWithoutUserInput.schema';
import { GiftCardCreateWithoutUserInputObjectSchema as GiftCardCreateWithoutUserInputObjectSchema } from './GiftCardCreateWithoutUserInput.schema';
import { GiftCardUncheckedCreateWithoutUserInputObjectSchema as GiftCardUncheckedCreateWithoutUserInputObjectSchema } from './GiftCardUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GiftCardUpdateWithoutUserInputObjectSchema), z.lazy(() => GiftCardUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => GiftCardCreateWithoutUserInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const GiftCardUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GiftCardUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUpsertWithWhereUniqueWithoutUserInput>;
export const GiftCardUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
