import * as z from 'zod';
export const OrderAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user: z.number(),
    userId: z.number(),
    address: z.number(),
    addressId: z.number(),
    latestPaymentId: z.number(),
    items: z.number(),
    totalAmount: z.number(),
    status: z.number(),
    paymentStatus: z.number(),
    currency: z.number(),
    shippingCost: z.number(),
    taxAmount: z.number(),
    discountAmount: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    couponUsages: z.number(),
    Payment: z.number(),
    GiftCardUsage: z.number()
  }).optional(),
  _sum: z.object({
    totalAmount: z.number().nullable(),
    shippingCost: z.number().nullable(),
    taxAmount: z.number().nullable(),
    discountAmount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    totalAmount: z.number().nullable(),
    shippingCost: z.number().nullable(),
    taxAmount: z.number().nullable(),
    discountAmount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    addressId: z.string().nullable(),
    latestPaymentId: z.string().nullable(),
    totalAmount: z.number().nullable(),
    currency: z.string().nullable(),
    shippingCost: z.number().nullable(),
    taxAmount: z.number().nullable(),
    discountAmount: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    addressId: z.string().nullable(),
    latestPaymentId: z.string().nullable(),
    totalAmount: z.number().nullable(),
    currency: z.string().nullable(),
    shippingCost: z.number().nullable(),
    taxAmount: z.number().nullable(),
    discountAmount: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});