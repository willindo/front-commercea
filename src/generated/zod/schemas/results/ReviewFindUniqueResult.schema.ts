import * as z from 'zod';
export const ReviewFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  productId: z.string(),
  rating: z.number().int(),
  comment: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  product: z.unknown()
}));