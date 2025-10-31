import * as z from 'zod';

// prettier-ignore
export const AddressResultSchema = z.object({
    id: z.string(),
    user: z.unknown().nullable(),
    userId: z.string().nullable(),
    line1: z.string(),
    line2: z.string().nullable(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
    orders: z.array(z.unknown())
}).strict();

export type AddressResultType = z.infer<typeof AddressResultSchema>;
