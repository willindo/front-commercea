import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    email: z.number(),
    password: z.number(),
    name: z.number(),
    phone: z.number(),
    role: z.number(),
    isVerified: z.number(),
    verificationToken: z.number(),
    verificationExpiry: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    addresses: z.number(),
    cart: z.number(),
    orders: z.number(),
    payments: z.number(),
    wishlists: z.number(),
    reviews: z.number(),
    giftCards: z.number(),
    couponUsages: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    verificationToken: z.string().nullable(),
    verificationExpiry: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    verificationToken: z.string().nullable(),
    verificationExpiry: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});