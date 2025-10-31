import * as z from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum(['id', 'cartId', 'productId', 'quantity', 'size', 'productName', 'productPrice', 'productImage', 'productDescription'])

export type CartItemScalarFieldEnum = z.infer<typeof CartItemScalarFieldEnumSchema>;