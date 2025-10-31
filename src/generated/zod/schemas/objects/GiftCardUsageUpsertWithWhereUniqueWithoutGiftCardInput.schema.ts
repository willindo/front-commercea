import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageUpdateWithoutGiftCardInputObjectSchema as GiftCardUsageUpdateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUpdateWithoutGiftCardInput.schema';
import { GiftCardUsageUncheckedUpdateWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedUpdateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedUpdateWithoutGiftCardInput.schema';
import { GiftCardUsageCreateWithoutGiftCardInputObjectSchema as GiftCardUsageCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageCreateWithoutGiftCardInput.schema';
import { GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutGiftCardInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GiftCardUsageUpdateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedUpdateWithoutGiftCardInputObjectSchema)]),
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema)])
}).strict();
export const GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInput>;
export const GiftCardUsageUpsertWithWhereUniqueWithoutGiftCardInputObjectZodSchema = makeSchema();
