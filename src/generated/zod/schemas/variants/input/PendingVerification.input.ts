import * as z from 'zod';

// prettier-ignore
export const PendingVerificationInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string().optional().nullable(),
    password: z.string(),
    token: z.string(),
    expiresAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PendingVerificationInputType = z.infer<typeof PendingVerificationInputSchema>;
