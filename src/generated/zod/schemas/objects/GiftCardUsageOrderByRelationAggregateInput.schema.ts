import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GiftCardUsageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardUsageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageOrderByRelationAggregateInput>;
export const GiftCardUsageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
