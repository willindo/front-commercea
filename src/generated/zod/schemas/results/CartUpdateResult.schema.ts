import * as z from 'zod';
export const CartUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  items: z.array(z.unknown())
}));