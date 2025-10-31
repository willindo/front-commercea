import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCreateNestedOneWithoutUsagesInputObjectSchema as GiftCardCreateNestedOneWithoutUsagesInputObjectSchema } from './GiftCardCreateNestedOneWithoutUsagesInput.schema';
import { OrderCreateNestedOneWithoutGiftCardUsageInputObjectSchema as OrderCreateNestedOneWithoutGiftCardUsageInputObjectSchema } from './OrderCreateNestedOneWithoutGiftCardUsageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amountUsed: z.number(),
  usedAt: z.coerce.date().optional(),
  giftCard: z.lazy(() => GiftCardCreateNestedOneWithoutUsagesInputObjectSchema),
  order: z.lazy(() => OrderCreateNestedOneWithoutGiftCardUsageInputObjectSchema).optional()
}).strict();
export const GiftCardUsageCreateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateInput>;
export const GiftCardUsageCreateInputObjectZodSchema = makeSchema();
