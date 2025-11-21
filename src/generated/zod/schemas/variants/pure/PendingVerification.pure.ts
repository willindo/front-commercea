import * as z from 'zod';

// prettier-ignore
export const PendingVerificationModelSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    password: z.string(),
    token: z.string(),
    expiresAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PendingVerificationPureType = z.infer<typeof PendingVerificationModelSchema>;
