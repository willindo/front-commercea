import * as z from 'zod';

import { DiscountTypeSchema } from '../../enums/DiscountType.schema';
// prettier-ignore
export const CouponModelSchema = z.object({
    id: z.string(),
    code: z.string(),
    description: z.string().nullable(),
    discountType: DiscountTypeSchema,
    discountValue: z.number(),
    minPurchase: z.number().nullable(),
    maxDiscount: z.number().nullable(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    active: z.boolean(),
    usages: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CouponPureType = z.infer<typeof CouponModelSchema>;
