import * as z from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    price: z.number(),
    stock: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    images: z.array(z.string()),
    categoryId: z.string().optional().nullable(),
    gender: GenderSchema.optional().nullable(),
    cartItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown()),
    category: z.unknown().optional().nullable(),
    sizes: z.array(z.unknown()),
    wishlistItems: z.array(z.unknown())
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
