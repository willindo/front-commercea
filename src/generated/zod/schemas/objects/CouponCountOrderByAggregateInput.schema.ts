import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  discountType: SortOrderSchema.optional(),
  discountValue: SortOrderSchema.optional(),
  minPurchase: SortOrderSchema.optional(),
  maxDiscount: SortOrderSchema.optional(),
  startDate: SortOrderSchema.optional(),
  endDate: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CouponCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CouponCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponCountOrderByAggregateInput>;
export const CouponCountOrderByAggregateInputObjectZodSchema = makeSchema();
