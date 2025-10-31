import * as z from 'zod';

// prettier-ignore
export const CouponUsageInputSchema = z.object({
    id: z.string(),
    coupon: z.unknown(),
    couponId: z.string(),
    user: z.unknown(),
    userId: z.string(),
    order: z.unknown().optional().nullable(),
    orderId: z.string().optional().nullable(),
    usedAt: z.date()
}).strict();

export type CouponUsageInputType = z.infer<typeof CouponUsageInputSchema>;
