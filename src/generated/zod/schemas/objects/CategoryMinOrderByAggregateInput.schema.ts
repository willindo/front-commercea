import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional()
}).strict();
export const CategoryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryMinOrderByAggregateInput>;
export const CategoryMinOrderByAggregateInputObjectZodSchema = makeSchema();
