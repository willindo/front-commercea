import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  productPrice: SortOrderSchema.optional()
}).strict();
export const CartItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemAvgOrderByAggregateInput>;
export const CartItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
