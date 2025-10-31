import * as z from 'zod';
export const WishlistItemUpsertResultSchema = z.object({
  id: z.string(),
  wishlistId: z.string(),
  productId: z.string(),
  wishlist: z.unknown(),
  product: z.unknown()
});