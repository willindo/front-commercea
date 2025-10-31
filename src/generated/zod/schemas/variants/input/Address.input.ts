import * as z from 'zod';

// prettier-ignore
export const AddressInputSchema = z.object({
    id: z.string(),
    user: z.unknown().optional().nullable(),
    userId: z.string().optional().nullable(),
    line1: z.string(),
    line2: z.string().optional().nullable(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
    orders: z.array(z.unknown())
}).strict();

export type AddressInputType = z.infer<typeof AddressInputSchema>;
