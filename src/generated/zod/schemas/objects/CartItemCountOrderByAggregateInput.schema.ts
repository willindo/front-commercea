import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cartId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  productName: SortOrderSchema.optional(),
  productPrice: SortOrderSchema.optional(),
  productImage: SortOrderSchema.optional(),
  productDescription: SortOrderSchema.optional()
}).strict();
export const CartItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCountOrderByAggregateInput>;
export const CartItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
