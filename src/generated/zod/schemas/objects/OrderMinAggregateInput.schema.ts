import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  total: z.literal(true).optional(),
  status: z.literal(true).optional(),
  paymentId: z.literal(true).optional(),
  paymentStatus: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const OrderMinAggregateInputObjectSchema: z.ZodType<Prisma.OrderMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderMinAggregateInputType>;
export const OrderMinAggregateInputObjectZodSchema = makeSchema();
