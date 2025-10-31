import * as z from 'zod';
export const GiftCardUpsertResultSchema = z.object({
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
});