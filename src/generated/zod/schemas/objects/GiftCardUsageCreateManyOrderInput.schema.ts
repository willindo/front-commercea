import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  giftCardId: z.string(),
  amountUsed: z.number(),
  usedAt: z.coerce.date().optional()
}).strict();
export const GiftCardUsageCreateManyOrderInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateManyOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateManyOrderInput>;
export const GiftCardUsageCreateManyOrderInputObjectZodSchema = makeSchema();
