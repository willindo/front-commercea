import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  balance: SortOrderSchema.optional()
}).strict();
export const GiftCardAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardAvgOrderByAggregateInput>;
export const GiftCardAvgOrderByAggregateInputObjectZodSchema = makeSchema();
