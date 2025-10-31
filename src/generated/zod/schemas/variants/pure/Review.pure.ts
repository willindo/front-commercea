import * as z from 'zod';

// prettier-ignore
export const ReviewModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    productId: z.string(),
    rating: z.number().int(),
    comment: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    product: z.unknown()
}).strict();

export type ReviewPureType = z.infer<typeof ReviewModelSchema>;
