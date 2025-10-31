import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  giftCardId: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  amountUsed: z.literal(true).optional(),
  usedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GiftCardUsageCountAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCountAggregateInputType>;
export const GiftCardUsageCountAggregateInputObjectZodSchema = makeSchema();
