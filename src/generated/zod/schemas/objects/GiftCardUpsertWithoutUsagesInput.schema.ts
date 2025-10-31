import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUpdateWithoutUsagesInputObjectSchema as GiftCardUpdateWithoutUsagesInputObjectSchema } from './GiftCardUpdateWithoutUsagesInput.schema';
import { GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema as GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema } from './GiftCardUncheckedUpdateWithoutUsagesInput.schema';
import { GiftCardCreateWithoutUsagesInputObjectSchema as GiftCardCreateWithoutUsagesInputObjectSchema } from './GiftCardCreateWithoutUsagesInput.schema';
import { GiftCardUncheckedCreateWithoutUsagesInputObjectSchema as GiftCardUncheckedCreateWithoutUsagesInputObjectSchema } from './GiftCardUncheckedCreateWithoutUsagesInput.schema';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './GiftCardWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GiftCardUpdateWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema)]),
  create: z.union([z.lazy(() => GiftCardCreateWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUsagesInputObjectSchema)]),
  where: z.lazy(() => GiftCardWhereInputObjectSchema).optional()
}).strict();
export const GiftCardUpsertWithoutUsagesInputObjectSchema: z.ZodType<Prisma.GiftCardUpsertWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUpsertWithoutUsagesInput>;
export const GiftCardUpsertWithoutUsagesInputObjectZodSchema = makeSchema();
