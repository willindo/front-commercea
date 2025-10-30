import * as z from 'zod';
export const OrderDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  total: z.number(),
  status: z.unknown(),
  paymentStatus: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  items: z.array(z.unknown()),
  payments: z.array(z.unknown())
}));