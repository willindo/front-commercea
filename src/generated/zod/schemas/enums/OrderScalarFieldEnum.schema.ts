import * as z from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id', 'userId', 'guestName', 'guestEmail', 'guestPhone', 'addressId', 'latestPaymentId', 'totalAmount', 'status', 'paymentStatus', 'currency', 'shippingCost', 'taxAmount', 'discountAmount', 'createdAt', 'updatedAt'])

export type OrderScalarFieldEnum = z.infer<typeof OrderScalarFieldEnumSchema>;