import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'description', 'price', 'stock', 'categoryId', 'gender', 'images', 'createdAt', 'updatedAt'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;