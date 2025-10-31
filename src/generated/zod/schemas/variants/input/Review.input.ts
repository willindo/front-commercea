import * as z from 'zod';

// prettier-ignore
export const ReviewInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    productId: z.string(),
    rating: z.number().int(),
    comment: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    product: z.unknown()
}).strict();

export type ReviewInputType = z.infer<typeof ReviewInputSchema>;
