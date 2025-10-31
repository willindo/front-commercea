import * as z from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id', 'name', 'slug'])

export type CategoryScalarFieldEnum = z.infer<typeof CategoryScalarFieldEnumSchema>;