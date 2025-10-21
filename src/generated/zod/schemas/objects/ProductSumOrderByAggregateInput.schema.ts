import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional()
}).strict();
export const ProductSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSumOrderByAggregateInput>;
export const ProductSumOrderByAggregateInputObjectZodSchema = makeSchema();
