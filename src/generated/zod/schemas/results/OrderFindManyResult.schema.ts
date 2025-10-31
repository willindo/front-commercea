import * as z from 'zod';
export const OrderFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user: z.unknown(),
  userId: z.string(),
  address: z.unknown().optional(),
  addressId: z.string().optional(),
  latestPaymentId: z.string().optional(),
  items: z.array(z.unknown()),
  totalAmount: z.number(),
  status: z.unknown(),
  paymentStatus: z.unknown(),
  currency: z.string(),
  shippingCost: z.number(),
  taxAmount: z.number(),
  discountAmount: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  couponUsages: z.array(z.unknown()),
  Payment: z.array(z.unknown()),
  GiftCardUsage: z.array(z.unknown())
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