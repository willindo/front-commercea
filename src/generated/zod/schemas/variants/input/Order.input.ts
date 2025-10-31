import * as z from 'zod';

import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const OrderInputSchema = z.object({
    id: z.string(),
    user: z.unknown(),
    userId: z.string(),
    address: z.unknown().optional().nullable(),
    addressId: z.string().optional().nullable(),
    latestPaymentId: z.string().optional().nullable(),
    items: z.array(z.unknown()),
    totalAmount: z.number(),
    status: OrderStatusSchema,
    paymentStatus: PaymentStatusSchema,
    currency: z.string(),
    shippingCost: z.number(),
    taxAmount: z.number(),
    discountAmount: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    couponUsages: z.array(z.unknown()),
    Payment: z.array(z.unknown()),
    GiftCardUsage: z.array(z.unknown())
}).strict();

export type OrderInputType = z.infer<typeof OrderInputSchema>;
