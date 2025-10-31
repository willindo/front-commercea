import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  balance: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  issuedBy: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GiftCardCountAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCountAggregateInputType>;
export const GiftCardCountAggregateInputObjectZodSchema = makeSchema();
