import * as z from 'zod';
export const OrderItemCreateResultSchema = z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number(),
  size: z.unknown().optional(),
  order: z.unknown(),
  product: z.unknown()
});