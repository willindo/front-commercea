import * as z from 'zod';
export const WishlistCreateResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  user: z.unknown(),
  items: z.array(z.unknown())
});