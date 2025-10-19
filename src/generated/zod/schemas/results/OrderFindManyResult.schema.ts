import * as z from 'zod';
export const OrderFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  total: z.number(),
  status: z.unknown(),
  paymentId: z.string().optional(),
  paymentStatus: z.unknown(),
  address: z.unknown().optional(),
  notes: z.string().optional(),
  user: z.unknown(),
  items: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
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