import * as z from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id', 'userId', 'line1', 'line2', 'city', 'state', 'postalCode', 'country'])

export type AddressScalarFieldEnum = z.infer<typeof AddressScalarFieldEnumSchema>;