import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema';
import { GiftCardCreateWithoutUserInputObjectSchema as GiftCardCreateWithoutUserInputObjectSchema } from './GiftCardCreateWithoutUserInput.schema';
import { GiftCardUncheckedCreateWithoutUserInputObjectSchema as GiftCardUncheckedCreateWithoutUserInputObjectSchema } from './GiftCardUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GiftCardCreateWithoutUserInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const GiftCardCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.GiftCardCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateOrConnectWithoutUserInput>;
export const GiftCardCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
