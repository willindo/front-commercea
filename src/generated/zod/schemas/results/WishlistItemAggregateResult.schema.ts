import * as z from 'zod';
export const WishlistItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    wishlistId: z.number(),
    productId: z.number(),
    wishlist: z.number(),
    product: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    wishlistId: z.string().nullable(),
    productId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    wishlistId: z.string().nullable(),
    productId: z.string().nullable()
  }).nullable().optional()});