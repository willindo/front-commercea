import * as z from 'zod';

import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const OrderModelSchema = z.object({
    id: z.string(),
    user: z.unknown(),
    userId: z.string(),
    address: z.unknown().nullable(),
    addressId: z.string().nullable(),
    latestPaymentId: z.string().nullable(),
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

export type OrderPureType = z.infer<typeof OrderModelSchema>;
