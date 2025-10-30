import * as z from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum(['id', 'userId', 'orderId', 'signature', 'amount', 'currency', 'createdAt', 'razorpayOrderId', 'razorpayPaymentId', 'status'])

export type PaymentScalarFieldEnum = z.infer<typeof PaymentScalarFieldEnumSchema>;