import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './GiftCardWhereInput.schema';
import { GiftCardUpdateWithoutUsagesInputObjectSchema as GiftCardUpdateWithoutUsagesInputObjectSchema } from './GiftCardUpdateWithoutUsagesInput.schema';
import { GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema as GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema } from './GiftCardUncheckedUpdateWithoutUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GiftCardUpdateWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema)])
}).strict();
export const GiftCardUpdateToOneWithWhereWithoutUsagesInputObjectSchema: z.ZodType<Prisma.GiftCardUpdateToOneWithWhereWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUpdateToOneWithWhereWithoutUsagesInput>;
export const GiftCardUpdateToOneWithWhereWithoutUsagesInputObjectZodSchema = makeSchema();
