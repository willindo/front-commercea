import * as z from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ProductResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    price: z.number(),
    stock: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    images: z.array(z.string()),
    categoryId: z.string().nullable(),
    gender: GenderSchema.nullable(),
    cartItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown()),
    category: z.unknown().nullable(),
    sizes: z.array(z.unknown()),
    wishlistItems: z.array(z.unknown())
}).strict();

export type ProductResultType = z.infer<typeof ProductResultSchema>;
