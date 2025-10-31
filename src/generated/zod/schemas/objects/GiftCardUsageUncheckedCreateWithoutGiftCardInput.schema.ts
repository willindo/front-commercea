import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string().optional().nullable(),
  amountUsed: z.number(),
  usedAt: z.coerce.date().optional()
}).strict();
export const GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUncheckedCreateWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUncheckedCreateWithoutGiftCardInput>;
export const GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectZodSchema = makeSchema();
