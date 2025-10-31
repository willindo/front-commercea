import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema';
import { GiftCardUpdateWithoutUserInputObjectSchema as GiftCardUpdateWithoutUserInputObjectSchema } from './GiftCardUpdateWithoutUserInput.schema';
import { GiftCardUncheckedUpdateWithoutUserInputObjectSchema as GiftCardUncheckedUpdateWithoutUserInputObjectSchema } from './GiftCardUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GiftCardUpdateWithoutUserInputObjectSchema), z.lazy(() => GiftCardUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const GiftCardUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GiftCardUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUpdateWithWhereUniqueWithoutUserInput>;
export const GiftCardUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
