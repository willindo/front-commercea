import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  images: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOrderByAggregateInput>;
export const ProductCountOrderByAggregateInputObjectZodSchema = makeSchema();
