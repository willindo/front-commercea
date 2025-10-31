import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amountUsed: z.literal(true).optional()
}).strict();
export const GiftCardUsageAvgAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageAvgAggregateInputType>;
export const GiftCardUsageAvgAggregateInputObjectZodSchema = makeSchema();
