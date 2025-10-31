import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  balance: z.literal(true).optional()
}).strict();
export const GiftCardAvgAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardAvgAggregateInputType>;
export const GiftCardAvgAggregateInputObjectZodSchema = makeSchema();
