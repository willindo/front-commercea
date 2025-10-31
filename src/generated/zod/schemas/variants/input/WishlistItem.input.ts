import * as z from 'zod';

// prettier-ignore
export const WishlistItemInputSchema = z.object({
    id: z.string(),
    wishlistId: z.string(),
    productId: z.string(),
    wishlist: z.unknown(),
    product: z.unknown()
}).strict();

export type WishlistItemInputType = z.infer<typeof WishlistItemInputSchema>;
