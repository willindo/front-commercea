import * as z from 'zod';

// prettier-ignore
export const WishlistResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    createdAt: z.date(),
    user: z.unknown(),
    items: z.array(z.unknown())
}).strict();

export type WishlistResultType = z.infer<typeof WishlistResultSchema>;
