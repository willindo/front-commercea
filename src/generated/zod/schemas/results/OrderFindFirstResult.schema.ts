import * as z from 'zod';
export const OrderFindFirstResultSchema = z.nullable(z.object({
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
}));