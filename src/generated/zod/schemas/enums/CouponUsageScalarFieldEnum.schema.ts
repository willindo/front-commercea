import * as z from 'zod';

export const CouponUsageScalarFieldEnumSchema = z.enum(['id', 'couponId', 'userId', 'orderId', 'usedAt'])

export type CouponUsageScalarFieldEnum = z.infer<typeof CouponUsageScalarFieldEnumSchema>;