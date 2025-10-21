import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CartMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartMaxOrderByAggregateInput>;
export const CartMaxOrderByAggregateInputObjectZodSchema = makeSchema();
