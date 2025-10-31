import * as z from 'zod';

import { DiscountTypeSchema } from '../../enums/DiscountType.schema';
// prettier-ignore
export const CouponInputSchema = z.object({
    id: z.string(),
    code: z.string(),
    description: z.string().optional().nullable(),
    discountType: DiscountTypeSchema,
    discountValue: z.number(),
    minPurchase: z.number().optional().nullable(),
    maxDiscount: z.number().optional().nullable(),
    startDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    active: z.boolean(),
    usages: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CouponInputType = z.infer<typeof CouponInputSchema>;
