import * as z from 'zod';
export const WishlistItemCreateResultSchema = z.object({
  id: z.string(),
  wishlistId: z.string(),
  productId: z.string(),
  wishlist: z.unknown(),
  product: z.unknown()
});