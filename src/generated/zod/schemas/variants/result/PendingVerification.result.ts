import * as z from 'zod';

// prettier-ignore
export const PendingVerificationResultSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    password: z.string(),
    token: z.string(),
    expiresAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PendingVerificationResultType = z.infer<typeof PendingVerificationResultSchema>;
