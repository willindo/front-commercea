import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional(),
  password: z.literal(true).optional(),
  token: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PendingVerificationCountAggregateInputObjectSchema: z.ZodType<Prisma.PendingVerificationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PendingVerificationCountAggregateInputType>;
export const PendingVerificationCountAggregateInputObjectZodSchema = makeSchema();
