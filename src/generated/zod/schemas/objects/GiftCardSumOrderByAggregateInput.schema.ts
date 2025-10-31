import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  balance: SortOrderSchema.optional()
}).strict();
export const GiftCardSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardSumOrderByAggregateInput>;
export const GiftCardSumOrderByAggregateInputObjectZodSchema = makeSchema();
