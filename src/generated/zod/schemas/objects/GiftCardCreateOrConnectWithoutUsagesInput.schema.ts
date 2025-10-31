import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema';
import { GiftCardCreateWithoutUsagesInputObjectSchema as GiftCardCreateWithoutUsagesInputObjectSchema } from './GiftCardCreateWithoutUsagesInput.schema';
import { GiftCardUncheckedCreateWithoutUsagesInputObjectSchema as GiftCardUncheckedCreateWithoutUsagesInputObjectSchema } from './GiftCardUncheckedCreateWithoutUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GiftCardCreateWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUsagesInputObjectSchema)])
}).strict();
export const GiftCardCreateOrConnectWithoutUsagesInputObjectSchema: z.ZodType<Prisma.GiftCardCreateOrConnectWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateOrConnectWithoutUsagesInput>;
export const GiftCardCreateOrConnectWithoutUsagesInputObjectZodSchema = makeSchema();
