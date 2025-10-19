import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  cart: z.unknown().optional(),
  orders: z.array(z.unknown()),
  wishlists: z.array(z.unknown()),
  payments: z.array(z.unknown())
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