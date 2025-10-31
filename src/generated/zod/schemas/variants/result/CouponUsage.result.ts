import * as z from 'zod';

// prettier-ignore
export const CouponUsageResultSchema = z.object({
    id: z.string(),
    coupon: z.unknown(),
    couponId: z.string(),
    user: z.unknown(),
    userId: z.string(),
    order: z.unknown().nullable(),
    orderId: z.string().nullable(),
    usedAt: z.date()
}).strict();

export type CouponUsageResultType = z.infer<typeof CouponUsageResultSchema>;
