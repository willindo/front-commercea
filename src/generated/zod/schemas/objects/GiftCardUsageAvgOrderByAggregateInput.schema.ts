import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amountUsed: SortOrderSchema.optional()
}).strict();
export const GiftCardUsageAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageAvgOrderByAggregateInput>;
export const GiftCardUsageAvgOrderByAggregateInputObjectZodSchema = makeSchema();
