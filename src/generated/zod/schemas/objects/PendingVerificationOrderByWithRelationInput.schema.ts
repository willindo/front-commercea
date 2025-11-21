import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PendingVerificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PendingVerificationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PendingVerificationOrderByWithRelationInput>;
export const PendingVerificationOrderByWithRelationInputObjectZodSchema = makeSchema();
