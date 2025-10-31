import * as z from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ProductModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number(),
    stock: z.number().int(),
    categoryId: z.string().nullable(),
    gender: GenderSchema.nullable(),
    images: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    category: z.unknown().nullable(),
    sizes: z.array(z.unknown()),
    cartItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown()),
    wishlistItems: z.array(z.unknown()),
    reviews: z.array(z.unknown())
}).strict();

export type ProductPureType = z.infer<typeof ProductModelSchema>;
