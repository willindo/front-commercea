import * as z from 'zod';
export const ProductFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional(),
  description: z.string().optional(),
  price: z.number(),
  stock: z.number().int(),
  categoryId: z.string().optional(),
  gender: z.unknown().optional(),
  images: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  category: z.unknown().optional(),
  sizes: z.array(z.unknown()),
  cartItems: z.array(z.unknown()),
  orderItems: z.array(z.unknown()),
  wishlistItems: z.array(z.unknown()),
  reviews: z.array(z.unknown())
}));