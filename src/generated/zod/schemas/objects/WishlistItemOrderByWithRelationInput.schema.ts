import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WishlistOrderByWithRelationInputObjectSchema as WishlistOrderByWithRelationInputObjectSchema } from './WishlistOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  wishlistId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  wishlist: z.lazy(() => WishlistOrderByWithRelationInputObjectSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WishlistItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WishlistItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemOrderByWithRelationInput>;
export const WishlistItemOrderByWithRelationInputObjectZodSchema = makeSchema();
