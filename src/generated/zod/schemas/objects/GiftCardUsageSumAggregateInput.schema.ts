import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amountUsed: z.literal(true).optional()
}).strict();
export const GiftCardUsageSumAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageSumAggregateInputType>;
export const GiftCardUsageSumAggregateInputObjectZodSchema = makeSchema();
