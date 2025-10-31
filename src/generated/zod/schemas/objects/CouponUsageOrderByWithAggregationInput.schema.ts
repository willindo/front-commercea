import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CouponUsageCountOrderByAggregateInputObjectSchema as CouponUsageCountOrderByAggregateInputObjectSchema } from './CouponUsageCountOrderByAggregateInput.schema';
import { CouponUsageMaxOrderByAggregateInputObjectSchema as CouponUsageMaxOrderByAggregateInputObjectSchema } from './CouponUsageMaxOrderByAggregateInput.schema';
import { CouponUsageMinOrderByAggregateInputObjectSchema as CouponUsageMinOrderByAggregateInputObjectSchema } from './CouponUsageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  couponId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  orderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  usedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CouponUsageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CouponUsageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CouponUsageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CouponUsageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CouponUsageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageOrderByWithAggregationInput>;
export const CouponUsageOrderByWithAggregationInputObjectZodSchema = makeSchema();
