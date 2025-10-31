import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GiftCardUsageCountOrderByAggregateInputObjectSchema as GiftCardUsageCountOrderByAggregateInputObjectSchema } from './GiftCardUsageCountOrderByAggregateInput.schema';
import { GiftCardUsageAvgOrderByAggregateInputObjectSchema as GiftCardUsageAvgOrderByAggregateInputObjectSchema } from './GiftCardUsageAvgOrderByAggregateInput.schema';
import { GiftCardUsageMaxOrderByAggregateInputObjectSchema as GiftCardUsageMaxOrderByAggregateInputObjectSchema } from './GiftCardUsageMaxOrderByAggregateInput.schema';
import { GiftCardUsageMinOrderByAggregateInputObjectSchema as GiftCardUsageMinOrderByAggregateInputObjectSchema } from './GiftCardUsageMinOrderByAggregateInput.schema';
import { GiftCardUsageSumOrderByAggregateInputObjectSchema as GiftCardUsageSumOrderByAggregateInputObjectSchema } from './GiftCardUsageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  giftCardId: SortOrderSchema.optional(),
  orderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amountUsed: SortOrderSchema.optional(),
  usedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GiftCardUsageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GiftCardUsageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GiftCardUsageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GiftCardUsageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GiftCardUsageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GiftCardUsageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GiftCardUsageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageOrderByWithAggregationInput>;
export const GiftCardUsageOrderByWithAggregationInputObjectZodSchema = makeSchema();
