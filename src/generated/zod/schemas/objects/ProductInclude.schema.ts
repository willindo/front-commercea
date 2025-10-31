import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { ProductSizeFindManySchema as ProductSizeFindManySchema } from '../findManyProductSize.schema';
import { CartItemFindManySchema as CartItemFindManySchema } from '../findManyCartItem.schema';
import { OrderItemFindManySchema as OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { WishlistItemFindManySchema as WishlistItemFindManySchema } from '../findManyWishlistItem.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  sizes: z.union([z.boolean(), z.lazy(() => ProductSizeFindManySchema)]).optional(),
  cartItems: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  wishlistItems: z.union([z.boolean(), z.lazy(() => WishlistItemFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductIncludeObjectSchema: z.ZodType<Prisma.ProductInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectZodSchema = makeSchema();
