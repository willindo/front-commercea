import * as z from 'zod';

export const GiftCardScalarFieldEnumSchema = z.enum(['id', 'code', 'userId', 'balance', 'isActive', 'issuedBy', 'createdAt', 'expiresAt'])

export type GiftCardScalarFieldEnum = z.infer<typeof GiftCardScalarFieldEnumSchema>;