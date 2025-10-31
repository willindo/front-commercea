import * as z from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id', 'userId', 'productId', 'rating', 'comment', 'createdAt', 'updatedAt'])

export type ReviewScalarFieldEnum = z.infer<typeof ReviewScalarFieldEnumSchema>;