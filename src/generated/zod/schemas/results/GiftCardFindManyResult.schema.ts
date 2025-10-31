import * as z from 'zod';
export const GiftCardFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  code: z.string(),
  userId: z.string().optional(),
  balance: z.number(),
  isActive: z.boolean(),
  issuedBy: z.string().optional(),
  createdAt: z.date(),
  expiresAt: z.date().optional(),
  user: z.unknown().optional(),
  usages: z.array(z.unknown())
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