import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string().optional().nullable(),
  amountUsed: z.number(),
  usedAt: z.coerce.date().optional()
}).strict();
export const GiftCardUsageCreateManyGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateManyGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateManyGiftCardInput>;
export const GiftCardUsageCreateManyGiftCardInputObjectZodSchema = makeSchema();
