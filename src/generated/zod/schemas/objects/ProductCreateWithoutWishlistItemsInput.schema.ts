import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema';
import { CategoryCreateNestedOneWithoutProductsInputObjectSchema as CategoryCreateNestedOneWithoutProductsInputObjectSchema } from './CategoryCreateNestedOneWithoutProductsInput.schema';
import { ProductSizeCreateNestedManyWithoutProductInputObjectSchema as ProductSizeCreateNestedManyWithoutProductInputObjectSchema } from './ProductSizeCreateNestedManyWithoutProductInput.schema';
import { CartItemCreateNestedManyWithoutProductInputObjectSchema as CartItemCreateNestedManyWithoutProductInputObjectSchema } from './CartItemCreateNestedManyWithoutProductInput.schema';
import { OrderItemCreateNestedManyWithoutProductInputObjectSchema as OrderItemCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemCreateNestedManyWithoutProductInput.schema';
import { ReviewCreateNestedManyWithoutProductInputObjectSchema as ReviewCreateNestedManyWithoutProductInputObjectSchema } from './ReviewCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  price: z.number(),
  stock: z.number().int().optional(),
  gender: GenderSchema.optional().nullable(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputObjectSchema).optional(),
  sizes: z.lazy(() => ProductSizeCreateNestedManyWithoutProductInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutWishlistItemsInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutWishlistItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutWishlistItemsInput>;
export const ProductCreateWithoutWishlistItemsInputObjectZodSchema = makeSchema();
