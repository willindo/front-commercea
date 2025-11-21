import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PendingVerificationCreateManyInputObjectSchema: z.ZodType<Prisma.PendingVerificationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PendingVerificationCreateManyInput>;
export const PendingVerificationCreateManyInputObjectZodSchema = makeSchema();
