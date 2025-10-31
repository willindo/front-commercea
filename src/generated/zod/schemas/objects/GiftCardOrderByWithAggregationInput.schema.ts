import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GiftCardCountOrderByAggregateInputObjectSchema as GiftCardCountOrderByAggregateInputObjectSchema } from './GiftCardCountOrderByAggregateInput.schema';
import { GiftCardAvgOrderByAggregateInputObjectSchema as GiftCardAvgOrderByAggregateInputObjectSchema } from './GiftCardAvgOrderByAggregateInput.schema';
import { GiftCardMaxOrderByAggregateInputObjectSchema as GiftCardMaxOrderByAggregateInputObjectSchema } from './GiftCardMaxOrderByAggregateInput.schema';
import { GiftCardMinOrderByAggregateInputObjectSchema as GiftCardMinOrderByAggregateInputObjectSchema } from './GiftCardMinOrderByAggregateInput.schema';
import { GiftCardSumOrderByAggregateInputObjectSchema as GiftCardSumOrderByAggregateInputObjectSchema } from './GiftCardSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  balance: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  issuedBy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => GiftCardCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GiftCardAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GiftCardMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GiftCardMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GiftCardSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GiftCardOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GiftCardOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardOrderByWithAggregationInput>;
export const GiftCardOrderByWithAggregationInputObjectZodSchema = makeSchema();
