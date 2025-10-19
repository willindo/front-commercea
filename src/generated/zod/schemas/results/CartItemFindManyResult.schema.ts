import * as z from 'zod';
export const CartItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  cartId: z.string(),
  productId: z.string(),
  size: z.unknown().optional(),
  quantity: z.number().int(),
  cart: z.unknown(),
  product: z.unknown(),
  productName: z.string(),
  productPrice: z.number(),
  productDescription: z.string().optional(),
  productImage: z.string().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});