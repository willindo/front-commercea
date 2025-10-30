import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const CartItemInputSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    size: SizeSchema.optional().nullable(),
    productDescription: z.string().optional().nullable(),
    productImage: z.string().optional().nullable(),
    productName: z.string().optional().nullable(),
    productPrice: z.number().optional().nullable(),
    cart: z.unknown(),
    product: z.unknown()
}).strict();

export type CartItemInputType = z.infer<typeof CartItemInputSchema>;
