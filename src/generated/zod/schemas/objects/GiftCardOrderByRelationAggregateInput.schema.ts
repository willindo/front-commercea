import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GiftCardOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GiftCardOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardOrderByRelationAggregateInput>;
export const GiftCardOrderByRelationAggregateInputObjectZodSchema = makeSchema();
