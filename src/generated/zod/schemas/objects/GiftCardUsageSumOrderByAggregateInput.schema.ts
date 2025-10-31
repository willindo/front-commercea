import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amountUsed: SortOrderSchema.optional()
}).strict();
export const GiftCardUsageSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageSumOrderByAggregateInput>;
export const GiftCardUsageSumOrderByAggregateInputObjectZodSchema = makeSchema();
