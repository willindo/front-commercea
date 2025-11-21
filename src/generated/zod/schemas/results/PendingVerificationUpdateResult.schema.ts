import * as z from 'zod';
export const PendingVerificationUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().optional(),
  password: z.string(),
  token: z.string(),
  expiresAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date()
}));