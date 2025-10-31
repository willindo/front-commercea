import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  balance: z.literal(true).optional()
}).strict();
export const GiftCardSumAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardSumAggregateInputType>;
export const GiftCardSumAggregateInputObjectZodSchema = makeSchema();
