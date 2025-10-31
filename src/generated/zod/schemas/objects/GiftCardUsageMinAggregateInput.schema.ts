import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  giftCardId: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  amountUsed: z.literal(true).optional(),
  usedAt: z.literal(true).optional()
}).strict();
export const GiftCardUsageMinAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageMinAggregateInputType>;
export const GiftCardUsageMinAggregateInputObjectZodSchema = makeSchema();
