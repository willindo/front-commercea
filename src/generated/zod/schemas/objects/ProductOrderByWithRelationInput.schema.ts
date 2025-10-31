import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema as CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { ProductSizeOrderByRelationAggregateInputObjectSchema as ProductSizeOrderByRelationAggregateInputObjectSchema } from './ProductSizeOrderByRelationAggregateInput.schema';
import { CartItemOrderByRelationAggregateInputObjectSchema as CartItemOrderByRelationAggregateInputObjectSchema } from './CartItemOrderByRelationAggregateInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema as OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { WishlistItemOrderByRelationAggregateInputObjectSchema as WishlistItemOrderByRelationAggregateInputObjectSchema } from './WishlistItemOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  price: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  categoryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  images: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
  sizes: z.lazy(() => ProductSizeOrderByRelationAggregateInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemOrderByRelationAggregateInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional(),
  wishlistItems: z.lazy(() => WishlistItemOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export const ProductOrderByWithRelationInputObjectZodSchema = makeSchema();
