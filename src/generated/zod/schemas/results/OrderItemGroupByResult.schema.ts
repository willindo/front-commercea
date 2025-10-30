import * as z from 'zod';
export const OrderItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number(),
  _count: z.object({
    id: z.number(),
    orderId: z.number(),
    productId: z.number(),
    quantity: z.number(),
    priceAtPurchase: z.number(),
    size: z.number(),
    order: z.number(),
    product: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    priceAtPurchase: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    priceAtPurchase: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    productId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    priceAtPurchase: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    productId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    priceAtPurchase: z.number().nullable()
  }).nullable().optional()
}));