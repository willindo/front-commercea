import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const WishlistMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WishlistMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistMaxOrderByAggregateInput>;
export const WishlistMaxOrderByAggregateInputObjectZodSchema = makeSchema();
