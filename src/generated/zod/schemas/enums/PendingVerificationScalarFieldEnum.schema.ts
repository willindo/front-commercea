import * as z from 'zod';

export const PendingVerificationScalarFieldEnumSchema = z.enum(['id', 'email', 'name', 'password', 'token', 'expiresAt', 'createdAt', 'updatedAt'])

export type PendingVerificationScalarFieldEnum = z.infer<typeof PendingVerificationScalarFieldEnumSchema>;