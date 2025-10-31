import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  giftCardId: z.string(),
  orderId: z.string().optional().nullable(),
  amountUsed: z.number(),
  usedAt: z.coerce.date().optional()
}).strict();
export const GiftCardUsageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUncheckedCreateInput>;
export const GiftCardUsageUncheckedCreateInputObjectZodSchema = makeSchema();
