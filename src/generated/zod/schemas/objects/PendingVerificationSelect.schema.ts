import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  token: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const PendingVerificationSelectObjectSchema: z.ZodType<Prisma.PendingVerificationSelect> = makeSchema() as unknown as z.ZodType<Prisma.PendingVerificationSelect>;
export const PendingVerificationSelectObjectZodSchema = makeSchema();
