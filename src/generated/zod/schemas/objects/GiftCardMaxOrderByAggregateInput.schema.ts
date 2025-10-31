import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  issuedBy: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional()
}).strict();
export const GiftCardMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardMaxOrderByAggregateInput>;
export const GiftCardMaxOrderByAggregateInputObjectZodSchema = makeSchema();
