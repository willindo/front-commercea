import * as z from 'zod';
export const WishlistItemFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  wishlistId: z.string(),
  productId: z.string(),
  wishlist: z.unknown(),
  product: z.unknown()
}));