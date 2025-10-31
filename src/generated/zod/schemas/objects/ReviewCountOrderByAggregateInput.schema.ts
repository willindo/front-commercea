import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ReviewCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCountOrderByAggregateInput>;
export const ReviewCountOrderByAggregateInputObjectZodSchema = makeSchema();
