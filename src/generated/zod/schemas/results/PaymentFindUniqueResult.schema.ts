import * as z from 'zod';
export const PaymentFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  orderId: z.string().optional(),
  signature: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  createdAt: z.date(),
  razorpayOrderId: z.string().optional(),
  razorpayPaymentId: z.string().optional(),
  status: z.unknown(),
  user: z.unknown(),
  order: z.unknown().optional()
}));