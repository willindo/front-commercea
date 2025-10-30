import * as z from 'zod';

import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const PaymentInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    orderId: z.string().optional().nullable(),
    signature: z.string().optional().nullable(),
    amount: z.number(),
    currency: z.string(),
    createdAt: z.date(),
    razorpayOrderId: z.string().optional().nullable(),
    razorpayPaymentId: z.string().optional().nullable(),
    status: PaymentStatusSchema,
    user: z.unknown(),
    order: z.unknown().optional().nullable()
}).strict();

export type PaymentInputType = z.infer<typeof PaymentInputSchema>;
