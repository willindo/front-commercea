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
  updatedAt: z.literal(true).optional()
}).strict();
export const PendingVerificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.PendingVerificationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PendingVerificationMaxAggregateInputType>;
export const PendingVerificationMaxAggregateInputObjectZodSchema = makeSchema();
