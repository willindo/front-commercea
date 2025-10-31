import * as z from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
  phone: z.string().optional(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  addresses: z.array(z.unknown()),
  cart: z.unknown().optional(),
  orders: z.array(z.unknown()),
  payments: z.array(z.unknown()),
  wishlists: z.array(z.unknown()),
  reviews: z.array(z.unknown()),
  giftCards: z.array(z.unknown()),
  couponUsages: z.array(z.unknown())
}));