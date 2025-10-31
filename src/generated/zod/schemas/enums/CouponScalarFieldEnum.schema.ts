import * as z from 'zod';

export const CouponScalarFieldEnumSchema = z.enum(['id', 'code', 'description', 'discountType', 'discountValue', 'minPurchase', 'maxDiscount', 'startDate', 'endDate', 'active', 'createdAt', 'updatedAt'])

export type CouponScalarFieldEnum = z.infer<typeof CouponScalarFieldEnumSchema>;