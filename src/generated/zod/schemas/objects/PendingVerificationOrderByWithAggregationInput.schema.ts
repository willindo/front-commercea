import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PendingVerificationCountOrderByAggregateInputObjectSchema as PendingVerificationCountOrderByAggregateInputObjectSchema } from './PendingVerificationCountOrderByAggregateInput.schema';
import { PendingVerificationMaxOrderByAggregateInputObjectSchema as PendingVerificationMaxOrderByAggregateInputObjectSchema } from './PendingVerificationMaxOrderByAggregateInput.schema';
import { PendingVerificationMinOrderByAggregateInputObjectSchema as PendingVerificationMinOrderByAggregateInputObjectSchema } from './PendingVerificationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PendingVerificationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PendingVerificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PendingVerificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PendingVerificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PendingVerificationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PendingVerificationOrderByWithAggregationInput>;
export const PendingVerificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
