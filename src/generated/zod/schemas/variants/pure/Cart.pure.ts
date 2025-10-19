import * as z from 'zod';

// prettier-ignore
export const CartModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CartPureType = z.infer<typeof CartModelSchema>;
