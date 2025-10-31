import * as z from 'zod';
export const ReviewFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  productId: z.string(),
  rating: z.number().int(),
  comment: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  product: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});