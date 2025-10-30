import * as z from 'zod';
export const PaymentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  orderId: z.string(),
  signature: z.string(),
  amount: z.number(),
  currency: z.string(),
  createdAt: z.date(),
  razorpayOrderId: z.string(),
  razorpayPaymentId: z.string(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    orderId: z.number(),
    signature: z.number(),
    amount: z.number(),
    currency: z.number(),
    createdAt: z.number(),
    razorpayOrderId: z.number(),
    razorpayPaymentId: z.number(),
    status: z.number(),
    user: z.number(),
    order: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    orderId: z.string().nullable(),
    signature: z.string().nullable(),
    amount: z.number().nullable(),
    currency: z.string().nullable(),
    createdAt: z.date().nullable(),
    razorpayOrderId: z.string().nullable(),
    razorpayPaymentId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    orderId: z.string().nullable(),
    signature: z.string().nullable(),
    amount: z.number().nullable(),
    currency: z.string().nullable(),
    createdAt: z.date().nullable(),
    razorpayOrderId: z.string().nullable(),
    razorpayPaymentId: z.string().nullable()
  }).nullable().optional()
}));