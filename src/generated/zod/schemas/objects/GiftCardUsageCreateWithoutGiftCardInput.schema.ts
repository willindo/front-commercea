import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateNestedOneWithoutGiftCardUsageInputObjectSchema as OrderCreateNestedOneWithoutGiftCardUsageInputObjectSchema } from './OrderCreateNestedOneWithoutGiftCardUsageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amountUsed: z.number(),
  usedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutGiftCardUsageInputObjectSchema).optional()
}).strict();
export const GiftCardUsageCreateWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateWithoutGiftCardInput>;
export const GiftCardUsageCreateWithoutGiftCardInputObjectZodSchema = makeSchema();
