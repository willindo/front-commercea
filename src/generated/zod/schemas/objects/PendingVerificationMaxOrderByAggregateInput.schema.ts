import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PendingVerificationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PendingVerificationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PendingVerificationMaxOrderByAggregateInput>;
export const PendingVerificationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
