import * as z from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    price: z.number(),
    stock: z.number().int(),
    categoryId: z.string().optional().nullable(),
    gender: GenderSchema.optional().nullable(),
    images: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    category: z.unknown().optional().nullable(),
    sizes: z.array(z.unknown()),
    cartItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown()),
    wishlistItems: z.array(z.unknown()),
    reviews: z.array(z.unknown())
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
