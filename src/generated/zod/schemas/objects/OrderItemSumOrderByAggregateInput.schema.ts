import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  priceAtPurchase: SortOrderSchema.optional()
}).strict();
export const OrderItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemSumOrderByAggregateInput>;
export const OrderItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
