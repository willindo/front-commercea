import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  couponId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  usedAt: SortOrderSchema.optional()
}).strict();
export const CouponUsageMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CouponUsageMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageMaxOrderByAggregateInput>;
export const CouponUsageMaxOrderByAggregateInputObjectZodSchema = makeSchema();
