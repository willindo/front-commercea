import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CartItemCountOrderByAggregateInputObjectSchema as CartItemCountOrderByAggregateInputObjectSchema } from './CartItemCountOrderByAggregateInput.schema';
import { CartItemAvgOrderByAggregateInputObjectSchema as CartItemAvgOrderByAggregateInputObjectSchema } from './CartItemAvgOrderByAggregateInput.schema';
import { CartItemMaxOrderByAggregateInputObjectSchema as CartItemMaxOrderByAggregateInputObjectSchema } from './CartItemMaxOrderByAggregateInput.schema';
import { CartItemMinOrderByAggregateInputObjectSchema as CartItemMinOrderByAggregateInputObjectSchema } from './CartItemMinOrderByAggregateInput.schema';
import { CartItemSumOrderByAggregateInputObjectSchema as CartItemSumOrderByAggregateInputObjectSchema } from './CartItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cartId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  productName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  productPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  productImage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  productDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => CartItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CartItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CartItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CartItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CartItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CartItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CartItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemOrderByWithAggregationInput>;
export const CartItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
