import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CouponUsageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CouponUsageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageOrderByRelationAggregateInput>;
export const CouponUsageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
