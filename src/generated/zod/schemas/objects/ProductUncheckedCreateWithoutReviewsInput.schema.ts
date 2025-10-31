import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema';
import { ProductSizeUncheckedCreateNestedManyWithoutProductInputObjectSchema as ProductSizeUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductSizeUncheckedCreateNestedManyWithoutProductInput.schema';
import { CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { WishlistItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as WishlistItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './WishlistItemUncheckedCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  price: z.number(),
  stock: z.number().int().optional(),
  categoryId: z.string().optional().nullable(),
  gender: GenderSchema.optional().nullable(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sizes: z.lazy(() => ProductSizeUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  wishlistItems: z.lazy(() => WishlistItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateWithoutReviewsInput>;
export const ProductUncheckedCreateWithoutReviewsInputObjectZodSchema = makeSchema();
