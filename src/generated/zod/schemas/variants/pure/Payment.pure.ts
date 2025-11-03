import * as z from 'zod';

import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const PaymentModelSchema = z.object({
    id: z.string(),
    userId: z.string().nullable(),
    orderId: z.string().nullable(),
    signature: z.string().nullable(),
    amount: z.number(),
    currency: z.string(),
    createdAt: z.date(),
    razorpayOrderId: z.string().nullable(),
    razorpayPaymentId: z.string().nullable(),
    status: PaymentStatusSchema,
    user: z.unknown().nullable(),
    order: z.unknown().nullable()
}).strict();

export type PaymentPureType = z.infer<typeof PaymentModelSchema>;
