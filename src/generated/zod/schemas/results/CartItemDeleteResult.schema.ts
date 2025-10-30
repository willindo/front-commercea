import * as z from 'zod';
export const CartItemDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  size: z.unknown().optional(),
  productDescription: z.string().optional(),
  productImage: z.string().optional(),
  productName: z.string().optional(),
  productPrice: z.number().optional(),
  cart: z.unknown(),
  product: z.unknown()
}));