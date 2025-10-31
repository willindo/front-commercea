import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageCreateWithoutGiftCardInputObjectSchema as GiftCardUsageCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageCreateWithoutGiftCardInput.schema';
import { GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutGiftCardInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema)])
}).strict();
export const GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateOrConnectWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateOrConnectWithoutGiftCardInput>;
export const GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectZodSchema = makeSchema();
