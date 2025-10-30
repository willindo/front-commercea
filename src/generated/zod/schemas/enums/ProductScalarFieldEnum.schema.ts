import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'price', 'stock', 'createdAt', 'updatedAt', 'images', 'categoryId', 'gender'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;