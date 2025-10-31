import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  giftCardId: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  amountUsed: SortOrderSchema.optional(),
  usedAt: SortOrderSchema.optional()
}).strict();
export const GiftCardUsageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCountOrderByAggregateInput>;
export const GiftCardUsageCountOrderByAggregateInputObjectZodSchema = makeSchema();
