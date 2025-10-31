import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const CartItemModelSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    size: SizeSchema.nullable(),
    productName: z.string().nullable(),
    productPrice: z.number().nullable(),
    productImage: z.string().nullable(),
    productDescription: z.string().nullable(),
    cart: z.unknown(),
    product: z.unknown()
}).strict();

export type CartItemPureType = z.infer<typeof CartItemModelSchema>;
