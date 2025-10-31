import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CouponUsageOrderByRelationAggregateInputObjectSchema as CouponUsageOrderByRelationAggregateInputObjectSchema } from './CouponUsageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  discountType: SortOrderSchema.optional(),
  discountValue: SortOrderSchema.optional(),
  minPurchase: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  maxDiscount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  startDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  usages: z.lazy(() => CouponUsageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CouponOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CouponOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponOrderByWithRelationInput>;
export const CouponOrderByWithRelationInputObjectZodSchema = makeSchema();
