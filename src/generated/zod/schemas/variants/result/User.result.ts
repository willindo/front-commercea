import * as z from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    email: z.string(),
    password: z.string(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    addresses: z.array(z.unknown()),
    cart: z.unknown().nullable(),
    orders: z.array(z.unknown()),
    payments: z.array(z.unknown()),
    wishlists: z.array(z.unknown()),
    reviews: z.array(z.unknown()),
    giftCards: z.array(z.unknown()),
    couponUsages: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
