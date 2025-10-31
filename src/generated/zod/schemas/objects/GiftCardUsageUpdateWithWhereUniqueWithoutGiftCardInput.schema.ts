import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageUpdateWithoutGiftCardInputObjectSchema as GiftCardUsageUpdateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUpdateWithoutGiftCardInput.schema';
import { GiftCardUsageUncheckedUpdateWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedUpdateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedUpdateWithoutGiftCardInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GiftCardUsageUpdateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedUpdateWithoutGiftCardInputObjectSchema)])
}).strict();
export const GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInput>;
export const GiftCardUsageUpdateWithWhereUniqueWithoutGiftCardInputObjectZodSchema = makeSchema();
